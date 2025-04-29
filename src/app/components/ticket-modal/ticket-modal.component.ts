import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

import { ConcertService } from '../../services/concert.service';
import { UserService } from '../../services/user.service';
import { TicketModel } from '../../models/ticket.model';
@Component({
  selector: 'app-ticket-modal',
  imports: [CommonModule, FormsModule],
  standalone: true,
  templateUrl: './ticket-modal.component.html',
  styleUrls: ['./ticket-modal.component.css']
})

export class TicketModalComponent {
  @Input() isVisible: boolean = false;
  @Input() concert: { id: number, artiste?: { nom: string }, date?: Date, lieu?: string, prix?: number ,imageUrl?:String, libelle?:String} | null = null;
  @Input() userId: number = 0; // Ajout de l'ID utilisateur pour l'achat
  @Output() close = new EventEmitter<void>();
  @Output() reserve = new EventEmitter<{quantity: number }>();

  ticketQuantity: number = 0;

  constructor(private userService: UserService) {}

  closeModal() {
    this.close.emit();
  }

    reserveSeat() {
    if ( this.ticketQuantity > 0) {
      // Appeler le service pour acheter le ticket
      this.userId = JSON.parse(sessionStorage.getItem('user') || '{}').id;
      this.userService.buyTicket(this.userId, this.concert?.id!, this.ticketQuantity).subscribe(
        (ticket: TicketModel[]) => {
          console.log('Ticket acheté:', ticket);
          this.generateTicketPDF();
          this.closeModal();
        },
        (error) => {
          console.error('Erreur lors de l\'achat du ticket:', error);
        }
      );
    }
  }

  incrementQuantity() {
    this.ticketQuantity++;
  }

  decrementQuantity() {
    if (this.ticketQuantity > 0) {
      this.ticketQuantity--;
    }
  }

  generateTicketPDF() {
    const ticketElement = document.getElementById('ticket-pdf');
    if (!ticketElement) return;

    ticketElement.classList.remove('hidden'); // afficher pour capture

    html2canvas(ticketElement).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('billet_concert.pdf');

      ticketElement.classList.add('hidden'); // cacher après capture
    });
  }


}
