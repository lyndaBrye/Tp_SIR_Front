import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { ConcertModel } from '../../models/concert.model';
import { ConcertService } from '../../services/concert/concert.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit {
  searchArtist: string = '';
  searchLocation: string = '';
  searchDate: string = '';
  concerts: ConcertModel[] = [];
  filteredConcerts: ConcertModel[] = [];

  constructor(private concertService: ConcertService) {}

  ngOnInit(): void {
    this.concertService.getAllConcerts().subscribe(data => {
      this.concerts = data;
      this.filteredConcerts = data;
    });
  }
  @Output() filtersChanged = new EventEmitter<any>();

  emitFilters(): void {
    this.filtersChanged.emit({
      artist: this.searchArtist,
      location: this.searchLocation,
      date: this.searchDate
    });
  }
  filterConcerts(): void {
    this.filteredConcerts = this.concerts.filter(concert => {
      const matchesArtist = concert.artiste?.nom.toLowerCase().includes(this.searchArtist.toLowerCase());
      const matchesLocation = concert.lieu?.toLowerCase().includes(this.searchLocation.toLowerCase());
      const matchesDate = this.searchDate ? concert.date?.startsWith(this.searchDate) : true;
      return matchesArtist && matchesLocation && matchesDate;
    });
  }
}
