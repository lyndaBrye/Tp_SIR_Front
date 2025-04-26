import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ConcertService } from '../../services/concert.service';
import { ArtisteService } from '../../services/artiste.service';
import { ConcertModel } from '../../models/concert.model';
import { ArtisteModel } from '../../models/artiste.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  concerts: ConcertModel[] = [];
  artistes: ArtisteModel[] = [];

  constructor(
    private concertService: ConcertService,
    private artisteService: ArtisteService
  ) {}

  ngOnInit(): void {
    this.loadConcerts();
    this.loadArtistes();
  }

  loadConcerts(): void {
    this.concertService.getAllConcerts().subscribe(data => {
      this.concerts = data.slice(0, 4); // Prendre seulement 4 concerts
    });
  }

  loadArtistes(): void {
    this.artisteService.getAllArtistes().subscribe(data => {
      this.artistes = data.slice(0, 4); // Prendre seulement 4 artistes
    });
  }
}
