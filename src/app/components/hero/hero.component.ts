import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ConcertModel } from '../../models/concert.model';
@Component({
  selector: 'app-hero',
  standalone: true, // Spécifie que ce composant est standalone
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  searchArtist: string = '';
  searchLocation: string = '';
  searchDate: string = '';
  concerts: ConcertModel[] = []; // Replace with your actual data source
  filteredConcerts: ConcertModel[] = [];

  constructor() {
    this.concerts = [];
    this.filteredConcerts = [...this.concerts];
  }

  filterConcerts() {
    this.filteredConcerts = this.concerts.filter(concert => {
      const matchesArtist = concert.artiste?.nom.toLowerCase().includes(this.searchArtist.toLowerCase());
      const matchesLocation = concert.lieu?.toLowerCase().includes(this.searchLocation.toLowerCase());
      const matchesDate = this.searchDate ? concert.date?.startsWith(this.searchDate) : true;
      return matchesArtist && matchesLocation && matchesDate;
    });
  }
}
