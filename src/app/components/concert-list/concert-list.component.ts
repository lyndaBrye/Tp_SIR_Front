import { Component, OnInit } from '@angular/core';
import { ConcertService } from '../../services/concert.service';
import { ConcertModel } from '../../models/concert.model';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-concert-list',
  standalone: true, // Spécifie que ce composant est standalone
  imports: [CommonModule],

  templateUrl: './concert-list.component.html',
  styleUrls: ['./concert-list.component.css']
})
export class ConcertListComponent implements OnInit {

  title: string = 'Découvrez les concerts près de chez vous';
  loginModalActive = false;

  concerts: ConcertModel[] = [];

  constructor(private concertService: ConcertService) {}

  ngOnInit(): void {
    this.loadConcerts();
  }

  loadConcerts(): void {
    this.concertService.getAllConcerts().subscribe({
      next: (data) => {
        this.concerts = data;
      },
      error: (error) => {
        console.error('Erreur lors du chargement des concerts :', error);
      }
    });
  }

  toggleLoginModal(): void {
    this.loginModalActive = !this.loginModalActive;
  }

}
