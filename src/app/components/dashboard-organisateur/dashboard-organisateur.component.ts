import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ConcertService } from '../../services/concert.service';
import { ConcertModel } from '../../models/concert.model';
import { ArtisteService } from '../../services/artiste.service';

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
  artistes: any[] = []; // List of artistes

  newConcert: any = {
    libelle: '',
    date: '',
    lieu: '',
    capacity: 0,
    prix: 0,
    artiste: null,
    imageUrl: ''
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
      this.concertService.addConcert(this.newConcert).subscribe({
        next: (concert) => {
          this.concerts.push(concert);
          this.newConcert = {
            libelle: '',
            date: '',
            lieu: '',
            capacity: 0,
            prix: 0,
            artiste: null,
            imageUrl: ''
          }; // Reset form
        },
        error: (err) => {
          console.error('Error adding concert:', err);
        }
      });
    } else {
      alert('Please fill in all required fields.');
    }
  }
}
