import { Routes } from '@angular/router';
import {UserListComponent} from './components/user-list/user-list.component';
import {ArtisteListComponent} from './components/artiste-list/artiste-list.component';

export const routes: Routes = [
  { path: '', component: UserListComponent },
  { path: 'users', component: UserListComponent },

  { path: 'artistes', component: ArtisteListComponent },
];
