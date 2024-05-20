import { Component, OnInit } from '@angular/core';
import { UsersCardsService } from './users/users-cards/Services/users-cards.service';
import { user } from './users/user.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'user-dynamic-dashboard';
  searchUser: user|null = null; 
  users: any[] = [];

  constructor(private service: UsersCardsService) {}

  ngOnInit(): void {
  }

}




