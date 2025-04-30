import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login/login.service';
import {FormsModule} from '@angular/forms'; // adapte le chemin si nécessaire

@Component({
  selector: 'app-login',
  imports: [
    FormsModule
  ],
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] // ➔ c'était écrit `styleUrl` mais c'est `styleUrls`
})
export class LoginComponent {
  email!: string;
  password!: string;
  type: string = 'user'; // Default to 'user'

  constructor(private authService: LoginService, private router: Router) {}

  login() {
    this.authService.login(this.email, this.password, this.type).subscribe({
      next: (data) => {
        console.log('Connexion réussie', data);
        sessionStorage.setItem('user', JSON.stringify(data));
        sessionStorage.setItem('userType', this.type);
        this.router.navigate(['/home']).then(r =>{} );
      },
      error: (err) => {
        alert('Email ou mot de passe incorrect');
      }
    });
  }

}
