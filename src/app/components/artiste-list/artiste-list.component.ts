import { Component, OnInit } from '@angular/core';
import { ArtisteService } from '../../services/artiste.service';
import { ArtisteModel } from '../../models/artiste.model';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from '../header/header.component';
import {FooterComponent} from '../footer/footer.component';

@Component({
  selector: 'app-artiste-list',
  standalone: true, // Spécifie que ce composant est standalone
  imports: [CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './artiste-list.component.html',
  styleUrls: ['./artiste-list.component.css']
})
export class ArtisteListComponent implements OnInit {
  artistes: ArtisteModel[] = [];

  constructor(private artisteService: ArtisteService) {}

  ngOnInit(): void {
    this.loadArtistes();
  }

  loadArtistes(): void {
    this.artisteService.getAllArtistes().subscribe(data => {
      this.artistes = data;
    });
  }

  deleteArtiste(id: number): void {
    this.artisteService.deleteArtiste(id).subscribe(() => {
      this.loadArtistes(); // Recharge la liste après suppression
    });
  }
}
