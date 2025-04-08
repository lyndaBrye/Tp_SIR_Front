import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {UserModel} from '../models/user.model';


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
}
