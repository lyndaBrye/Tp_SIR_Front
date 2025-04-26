// @ts-ignore
import { Routes } from '@angular/router';
import {UserListComponent} from './components/user-list/user-list.component';
import {ArtisteListComponent} from './components/artiste-list/artiste-list.component';
import {ConcertListComponent} from './components/concert-list/concert-list.component';
import {HomeComponent} from './components/home/home.component';
//import {TicketListComponent} from './components/ticket-list/ticket-list.component';

let TicketListComponent;
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UserListComponent },
  { path: 'concerts', component: ConcertListComponent },
//  { path: 'tickets', component: TicketListComponent },
  { path: 'artistes', component: ArtisteListComponent },
];
