import { Component } from '@angular/core';
import {ArtisteListComponent} from './components/artiste-list/artiste-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ArtisteListComponent],
  template: `<app-artiste-list></app-artiste-list>`,

 // templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mon-projet-angular';
}
