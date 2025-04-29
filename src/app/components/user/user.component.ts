import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserModel} from '../../models/user.model';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [CommonModule, RouterLink],
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {
  user: UserModel ;
  constructor() {
    this.user = {} as UserModel;
  }
  ngOnInit(): void {
    const userString = sessionStorage.getItem('user');
    if (userString) {
      this.user = JSON.parse(userString);
    }
  }

}
