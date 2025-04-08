import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ArtisteModel } from '../models/artiste.model';

@Injectable({
  providedIn: 'root',
})
export class ArtisteService {
  private apiUrl = 'http://localhost:8080/artistes/';

  constructor(private http: HttpClient) {}

  // Récupérer tous les artistes
  getAllArtistes(): Observable<ArtisteModel[]> {
    return this.http.get<ArtisteModel[]>(`${this.apiUrl}`);
  }

  // Récupérer un artiste par son ID
  getArtisteById(id: number): Observable<ArtisteModel> {
    return this.http.get<ArtisteModel>(`${this.apiUrl}${id}`);
  }

  // Ajouter un nouvel artiste
  addArtiste(artiste: ArtisteModel): Observable<ArtisteModel> {
    return this.http.post<ArtisteModel>(this.apiUrl, artiste);
  }

  // Mettre à jour un artiste
  updateArtiste(id: number, artiste: ArtisteModel): Observable<ArtisteModel> {
    return this.http.put<ArtisteModel>(`${this.apiUrl}${id}`, artiste);
  }

  // Supprimer un artiste
  deleteArtiste(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}${id}`);
  }
}
