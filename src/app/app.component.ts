import { Component } from '@angular/core';
import {ArtisteListComponent} from './components/artiste-list/artiste-list.component';
import {RouterLink, RouterModule, RouterOutlet} from '@angular/router';
import {HomeComponent} from './components/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mon-projet-angular';
}
