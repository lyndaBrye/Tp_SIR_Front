import { Component, OnInit } from '@angular/core';import {UserService} from '../../services/user/user.service';
import {UserModel} from '../../models/user.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-list',
  standalone: true,

  imports: [CommonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit{
  users: UserModel[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getAllUsers().subscribe(data => {
      this.users = data;
    });
  }
}
