import { Component } from '@angular/core';
import {ArtisteListComponent} from './components/artiste-list/artiste-list.component';
import {UserListComponent} from './components/user-list/user-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ArtisteListComponent, UserListComponent],
 templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mon-projet-angular';
}
