import { Component } from '@angular/core';
import {ArtisteListComponent} from './components/artiste-list/artiste-list.component';
import {UserListComponent} from './components/user-list/user-list.component';
import {TicketListComponent} from './components/ticket-list/ticket-list.component';
import {RouterOutlet} from '@angular/router';

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
