// @ts-ignore
import { Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';
import {UserListComponent} from './components/user-list/user-list.component';
import {ArtisteListComponent} from './components/artiste-list/artiste-list.component';
import {ConcertListComponent} from './components/concert-list/concert-list.component';
import {HomeComponent} from './components/home/home.component';
//import {TicketListComponent} from './components/ticket-list/ticket-list.component';

let TicketListComponent;
export const routes: Routes = [
  { path: 'home', loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent) },
  { path: 'users', loadComponent: () => import('./components/user-list/user-list.component').then(m => m.UserListComponent) },
  { path: 'concerts', component: ConcertListComponent, canActivate: [AuthGuardService] },
  { path: 'artistes', loadComponent: () => import('./components/artiste-list/artiste-list.component').then(m => m.ArtisteListComponent) },
  { path: '', loadComponent: () => import('./components/login/login.component').then(m => m.LoginComponent) },

];
