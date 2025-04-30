import {DashboardOrganisateurComponent} from '../dashboard-organisateur/dashboard-organisateur.component';
import {Component, EventEmitter, Input, Output} from '@angular/core';
import { LoginService } from '../../services/login/login.service'; // Ajuste le chemin
import { RouterModule } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  standalone: true,
  imports: [RouterModule, NgIf, DashboardOrganisateurComponent], // important pour *ngIf et routerLink
})
export class HeaderComponent {
  @Input() isVisible: boolean = false;
  @Output() close = new EventEmitter<void>();

  constructor(public loginService: LoginService) {}

  openModal() {
    this.isVisible = true;
  }

  closeModal() {
    this.isVisible = false;
    this.close.emit();

  }


  isOrganisateur(): boolean {
    const userType = sessionStorage.getItem('userType');
    return userType === 'organisateur';
  }
}
