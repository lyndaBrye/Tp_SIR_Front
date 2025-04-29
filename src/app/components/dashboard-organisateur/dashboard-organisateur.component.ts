import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ConcertService } from '../../services/concert.service';
import { ConcertModel } from '../../models/concert.model';
import { ArtisteService } from '../../services/artiste.service';
import {ArtisteModel} from '../../models/artiste.model';

@Component({
  selector: 'app-dashboard-organisateur',
  imports: [CommonModule, FormsModule],
  standalone: true,
  templateUrl: './dashboard-organisateur.component.html',
  styleUrls: ['./dashboard-organisateur.component.css']
})
export class DashboardOrganisateurComponent {
  @Input() isVisible: boolean = false; // Controls modal visibility
  @Output() close = new EventEmitter<void>(); // Event to close the modal

  concerts: ConcertModel[] = []; // List of concerts
  artistes: ArtisteModel[] = []; // List of artistes

  newConcert: any = {
    libelle: '',
    date: null ,
    lieu: '',
    capacity: 0,
    prix: 0,
    artiste_id: null,
    imageUrl: '',
    organisateur_id: null
  };

  constructor(
    private concertService: ConcertService,
    private artisteService: ArtisteService
  ) {}

  ngOnInit() {
    this.loadArtistes();
    this.loadConcerts();
  }

  closeModal() {
    this.close.emit();
  }

  loadArtistes() {
    this.artisteService.getAllArtistes().subscribe({
      next: (data: any[]) => {
        this.artistes = data;
      },
      error: (err) => {
        console.error('Error loading artistes:', err);
      }
    });
  }

  loadConcerts() {
    this.concertService.getAllConcerts().subscribe({
      next: (data) => {
        this.concerts = data;
      },
      error: (err) => {
        console.error('Error loading concerts:', err);
      }
    });
  }

  addConcert() {
    if (this.newConcert.libelle && this.newConcert.date && this.newConcert.lieu) {
      //set the organisateur to newConcert
      const userString = sessionStorage.getItem('user');

      if (userString) {
        const user = JSON.parse(userString); // Convertir le string en objet
         // Récupérer l'id
        this.newConcert.organisateur_id = user.id;
      }
      this.concertService.addConcert(this.newConcert).subscribe({
        next: (concert) => {
          this.concerts.push(concert);
          this.newConcert = {
            libelle: '',
            date: null,
            lieu: '',
            capacity: 0,
            prix: 0,
            artiste_id: null,
            imageUrl: '',
            organisateur_id: null
          };
        },
        error: (err) => {
          console.error('Error adding concert:', err);
        }
      });
    } else {
      alert('Please fill in all required fields.');
    }
  }

  deleteConcert(concert: ConcertModel) {
    this.concertService.deleteConcert(concert.id!).subscribe({
      next: () => {
        this.concerts = this.concerts.filter(c => c.id !== concert.id);
      },
      error: (err) => {
        console.error('Error deleting concert:', err);
      }
    });
  }

  updateConcert(concert: ConcertModel) {
    this.concertService.updateConcert(concert.id!, concert).subscribe({
      next: () => {
        this.loadConcerts();
      },
      error: (err) => {
        console.error('Error updating concert:', err);
      }
    });
  }
}
