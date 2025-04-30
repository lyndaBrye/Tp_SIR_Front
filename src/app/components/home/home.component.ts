import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { RouterModule } from '@angular/router';
import { ConcertService } from '../../services/concert/concert.service';
import { ArtisteService } from '../../services/artiste/artiste.service';
import { ConcertModel } from '../../models/concert.model';
import { ArtisteModel } from '../../models/artiste.model';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import {HeroComponent} from '../hero/hero.component';
import {TicketModalComponent} from '../ticket-modal/ticket-modal.component';
import {ConcertListComponent} from '../concert-list/concert-list.component';
import {ArtisteListComponent} from '../artiste-list/artiste-list.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent, FooterComponent, HeroComponent, ConcertListComponent, ArtisteListComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class HomeComponent implements OnInit {
  concerts: ConcertModel[] = [];
  artistes: ArtisteModel[] = [];
  isModalVisible: boolean = false;
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
      this.concerts = data
    });
  }

  loadArtistes(): void {
    this.artisteService.getAllArtistes().subscribe(data => {
      this.artistes = data.slice(0, 4); // Prendre seulement 4 artistes
    });
  }
  currentFilters: any = {};

  onFiltersChanged(filters: any): void {
    this.currentFilters = filters;
  }






}
