// @ts-ignore
import { Routes } from '@angular/router';
import { AuthGuardService } from './services/authGuard/auth-guard.service';
import {ConcertListComponent} from './components/concert-list/concert-list.component';
import {ArtisteListComponent} from './components/artiste-list/artiste-list.component';

let TicketListComponent;
export const routes: Routes = [
  { path: 'home', loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent), canActivate: [AuthGuardService] },
{ path: 'users', loadComponent: () => import('./components/user-list/user-list.component').then(m => m.UserListComponent), canActivate: [AuthGuardService] },
  { path: 'concerts', loadComponent: () =>import('./components/concert-list/concert-list.component').then(m =>ConcertListComponent), canActivate: [AuthGuardService] },
  { path: 'artistes', loadComponent: () => import('./components/artiste-list/artiste-list.component').then(m => m.ArtisteListComponent), canActivate: [AuthGuardService] },
  { path: '', loadComponent: () => import('./components/login/login.component').then(m => m.LoginComponent) },
  { path: 'user', loadComponent: () => import('./components/user/user.component').then(m => m.UserComponent), canActivate: [AuthGuardService] },

];
