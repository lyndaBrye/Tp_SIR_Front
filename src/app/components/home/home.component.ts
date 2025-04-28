import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { RouterModule } from '@angular/router';
import { ConcertService } from '../../services/concert.service';
import { ArtisteService } from '../../services/artiste.service';
import { ConcertModel } from '../../models/concert.model';
import { ArtisteModel } from '../../models/artiste.model';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import {HeroComponent} from '../hero/hero.component';
import {TicketModalComponent} from '../ticket-modal/ticket-modal.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent, FooterComponent, HeroComponent, TicketModalComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class HomeComponent implements OnInit {
  concerts: ConcertModel[] = [];
  artistes: ArtisteModel[] = [];
  isModalVisible: boolean = false;
  selectedConcert: any = null;
  availableSeats: string[] = [];   constructor(
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



  openModal(concert: ConcertModel) {
    console.log('Concert sélectionné:', concert);
    this.selectedConcert = concert;
 //   this.availableSeats = this.generateAvailableSeats(); // Tu peux améliorer selon ton besoin
    this.isModalVisible = true;
  }

  closeModal() {
    this.isModalVisible = false;
  }

  handleReservation(event: any) {
    /*if (this.selectedConcert) {
      this.ticketService.buyTicket(this.selectedConcert.id, event.seat).subscribe(
        (response) => {
          console.log('Réservation réussie', response);
          this.isModalVisible = false;
        },
        (error) => {
          console.error('Erreur lors de la réservation', error);
        }
      );
    }*/
  }



}
