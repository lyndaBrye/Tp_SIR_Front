import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {ConcertModel} from '../../models/concert.model';

@Injectable({
  providedIn: 'root'
})
export class ConcertService {


  private apiUrl = 'http://localhost:8080/concerts';

  constructor(private http: HttpClient) {}

  getAllConcerts(): Observable<ConcertModel[]> {
    return this.http.get<ConcertModel[]>(`${this.apiUrl}/all`);
  }
  getCapaciteRestante(concertId: number): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/${concertId}/capacite-restante`);
  }


  getConcertsByArtisteId(artisteId: number): Observable<ConcertModel[]> {
    return this.http.get<ConcertModel[]>(`${this.apiUrl}/artiste/${artisteId}`);
  }
  getConcertsByLieu(lieu: string): Observable<ConcertModel[]> {
    return this.http.get<ConcertModel[]>(`${this.apiUrl}/lieu/${lieu}`);
  }
  getConcertsByDate(date: string): Observable<ConcertModel[]> {
    return this.http.get<ConcertModel[]>(`${this.apiUrl}/date/${date}`);
  }
  getConcertById(id: number): Observable<ConcertModel> {
    return this.http.get<ConcertModel>(`${this.apiUrl}/${id}`);
  }

  getConcertByOrganisateurId(organisateurId: number): Observable<ConcertModel[]> {
    return this.http.get<ConcertModel[]>(`${this.apiUrl}/organisateur/${organisateurId}`);
  }

  addConcert(concert: ConcertModel): Observable<ConcertModel> {
    return this.http.post<ConcertModel>(`${this.apiUrl}`, concert);
  }

  updateConcert(id: number, concert: ConcertModel): Observable<ConcertModel> {
    return this.http.put<ConcertModel>(`${this.apiUrl}/${id}`, concert);
  }

  deleteConcert(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
