import { Routes } from '@angular/router';
import {UserListComponent} from './components/user-list/user-list.component';
import {ArtisteListComponent} from './components/artiste-list/artiste-list.component';
import {TicketListComponent} from './components/ticket-list/ticket-list.component';
import {AppComponent} from './app.component';

export const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'users', component: UserListComponent },
  { path: 'artistes', component: ArtisteListComponent },
  { path: 'tickets', component: TicketListComponent },

];
