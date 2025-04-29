import { Component, OnInit } from '@angular/core';
import { ConcertService } from '../../services/concert.service';
import { ConcertModel } from '../../models/concert.model';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from "../header/header.component";
import {FooterComponent} from '../footer/footer.component';
import {RouterLink} from "@angular/router";
import {TicketModalComponent} from '../ticket-modal/ticket-modal.component';
import {ArtisteModel} from '../../models/artiste.model';
import {ArtisteService} from '../../services/artiste.service';

@Component({
  selector: 'app-concert-list',
  standalone: true, // Spécifie que ce composant est standalone
  imports: [CommonModule, TicketModalComponent],

  templateUrl: './concert-list.component.html',
  styleUrls: ['./concert-list.component.css']
})
export class ConcertListComponent implements OnInit {

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
      this.concerts = data; // Prendre seulement 4 concerts
    });
  }

  loadArtistes(): void {
    this.artisteService.getAllArtistes().subscribe(data => {
      this.artistes = data; // Prendre seulement 4 artistes
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
