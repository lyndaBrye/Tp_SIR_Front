// @ts-ignore
import {Injectable} from '@angular/core';
// @ts-ignore
import {Observable} from 'rxjs';
// @ts-ignore
import {HttpClient} from '@angular/common/http';
import {UserModel} from '../models/user.model';
import {TicketModel} from '../models/ticket.model';


// @ts-ignore
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8080/users/';
  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>('http://localhost:8080/users/all'); // adapte selon ton backend
  }

  getUserById(id: number) {
    return this.http.get<UserModel>(`${this.apiUrl}${id}`);
  }


  createUser(user: UserModel): Observable<UserModel> {
    return this.http.post<UserModel>(this.apiUrl, user);
  }

  updateUser(id: number, user: UserModel): Observable<UserModel> {
    return this.http.put<UserModel>(`${this.apiUrl}${id}`, user);
  }

  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}${id}`);
  }

  buyTicket(userId: number, concertId: number, quantity: number): Observable<TicketModel[]> {
    return this.http.post<TicketModel[]>(`${this.apiUrl}${userId}/tickets/${concertId}?quantity=${quantity}`, {});


  }
}
