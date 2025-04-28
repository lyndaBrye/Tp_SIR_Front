import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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
  @Input() concert: { id: number, artiste?: { nom: string }, date?: Date, lieu?: string, prix?: number } | null = null;
  @Input() userId: number = 0; // Ajout de l'ID utilisateur pour l'achat
  @Output() close = new EventEmitter<void>();
  @Output() reserve = new EventEmitter<{quantity: number }>();

  selectedSeat: string = '';
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
          this.closeModal();  // Fermer le modal après l'achat réussi
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

}
