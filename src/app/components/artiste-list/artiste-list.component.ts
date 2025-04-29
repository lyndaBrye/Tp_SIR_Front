import { Component, OnInit } from '@angular/core';
import { ArtisteService } from '../../services/artiste.service';
import { ArtisteModel } from '../../models/artiste.model';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from '../header/header.component';
import {FooterComponent} from '../footer/footer.component';
import {ConcertListComponent} from "../concert-list/concert-list.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-artiste-list',
  standalone: true,
  imports: [CommonModule],
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
