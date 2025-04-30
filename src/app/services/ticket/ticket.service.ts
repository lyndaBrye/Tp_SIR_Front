import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TicketModel } from '../../models/ticket.model';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private baseUrl = 'http://localhost:8080/tickets'; // adapte l'URL si besoin

  constructor(private http: HttpClient) {}

  getAllTickets(): Observable<TicketModel[]> {
    return this.http.get<TicketModel[]>(this.baseUrl+'/all');
  }

  getTicketById(id: number): Observable<TicketModel> {
    return this.http.get<TicketModel>(`${this.baseUrl}/${id}`);
  }

  addTicket(ticket: TicketModel): Observable<TicketModel> {
    return this.http.post<TicketModel>(this.baseUrl, ticket);
  }

  updateTicket(id: number, ticket: TicketModel): Observable<TicketModel> {
    return this.http.put<TicketModel>(`${this.baseUrl}/${id}`, ticket);
  }

  deleteTicket(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
