import {TicketModel} from '../../models/ticket.model';
import {TicketService} from '../../services/ticket/ticket.service';
import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
@Component({
  selector: 'app-ticket-list',
  standalone: true,

  imports: [CommonModule],
  templateUrl: './ticket-list.component.html',
  styleUrl: './ticket-list.component.css'
})
export class TicketListComponent implements OnInit {
  tickets: TicketModel[] = [];
  loading: boolean = true;
  error: boolean = false;

  constructor(private ticketService: TicketService) {}

  ngOnInit(): void {
    this.ticketService.getAllTickets().subscribe(
      data => {
        this.tickets = data;
        this.loading = false;
      },
      error => {
        console.error('Erreur chargement tickets:', error);
        this.loading = false;
        this.error = true;
      }
    );
  }
}
