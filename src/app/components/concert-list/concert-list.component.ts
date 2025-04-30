import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { ConcertService } from '../../services/concert/concert.service';
import { ConcertModel } from '../../models/concert.model';
import {CommonModule} from '@angular/common';
import {TicketModalComponent} from '../ticket-modal/ticket-modal.component';
import {ArtisteModel} from '../../models/artiste.model';
import {ArtisteService} from '../../services/artiste/artiste.service';
import {data} from 'autoprefixer';

@Component({
  selector: 'app-concert-list',
  standalone: true,
  imports: [CommonModule, TicketModalComponent],

  templateUrl: './concert-list.component.html',
  styleUrls: ['./concert-list.component.css']
})
export class ConcertListComponent implements OnChanges {
  @Input() filters: any;
  concerts: ConcertModel[] = [];
  artistes: ArtisteModel[] = [];
  isModalVisible: boolean = false;
  selectedConcert: any = null;
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
      this.concerts = data;
      this.filteredConcerts = data;

    });
  }

  loadArtistes(): void {
    this.artisteService.getAllArtistes().subscribe(data => {
      this.artistes = data;

    });
  }



  openModal(concert: ConcertModel) {
    console.log('Concert sélectionné:', concert);
    this.selectedConcert = concert;
    this.isModalVisible = true;
  }

  closeModal() {
    this.isModalVisible = false;
  }

  filteredConcerts: ConcertModel[] = [];


  ngOnChanges(changes: SimpleChanges): void {
    if (changes['filters'] && this.filters) {
      this.applyFilters();
    }
  }

  applyFilters(): void {
    this.filteredConcerts = this.concerts.filter(concert => {
      const matchesArtist = concert.artiste?.nom.toLowerCase().includes(this.filters.artist?.toLowerCase() || '');
      const matchesLocation = concert.lieu?.toLowerCase().includes(this.filters.location?.toLowerCase() || '');
      const matchesDate = this.filters.date ? concert.date?.startsWith(this.filters.date) : true;
      return matchesArtist && matchesLocation && matchesDate;
    });
  }
}
