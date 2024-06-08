import { Component, OnInit } from '@angular/core';
import { user } from '../services/user;
import { User } from '../models/user;

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[] = [];

  constructor(private user: UserService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers(): void {
    this.user.getAllUsers().subscribe(
      response => {
        this.users = response;
      },
      error => {
        console.error('Erreur lors de la récupération des utilisateurs', error);
      }
    );
  }
}
