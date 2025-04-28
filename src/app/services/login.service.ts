import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http'; // AJOUT
import {Observable, throwError} from 'rxjs';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseUrl = 'http://localhost:8080';
  constructor(private http: HttpClient, private router: Router) {}
  login(email: string, password: string, type: string): Observable<any> {
    const url = type === 'user' ? `${this.baseUrl}/users/login` : `${this.baseUrl}/organisateurs/login`;
    return this.http.post(url, { email, password });
  }
  private handleError(error: HttpErrorResponse): Observable<never> {
    console.error('An error occurred:', error.message);
    return throwError(() => new Error('Login failed. Please try again later.'));
  }
  isLoggedIn(): boolean {
    return sessionStorage.getItem('user') !== null;
  }

  logout(): void {
    sessionStorage.clear();
    this.router.navigate(['/']);
  }
}
