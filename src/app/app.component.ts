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
  searchUser: user|null = null; // Ensure searchUser is of type User or null
  users: any[] = [];

  constructor(private service: UsersCardsService) {}

  ngOnInit(): void {
    // this.fetchAllUsers();
  }

  // onSearchUserChanged(user: user | null) {
  //   this.searchUser = user;
  // }

  // fetchAllUsers() {
  //   this.service.getUser().subscribe(
  //     response => {
  //       this.users = response.data;
  //       console.log(response);
  //     },
  //     error => {
  //       console.error('Error fetching users:', error);
  //     }
  //   );
  // }

  // getSearchUserId(): string {
  //   // Convert searchUser to string if it's not null
  //   return this.searchUser ? this.searchUser.toString() : '';
  // }
}




// import { Component, OnInit } from '@angular/core';
// import { UsersCardsService } from './users/users-cards/Services/users-cards.service';
// import { User } from './users/user.model';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent implements OnInit {
//   title = 'user-dynamic-dashboard';
//   id: string = '';  
//   searchUser: User | null = null; // Ensure searchUser is initially null
//   users: User[] = [];

//   constructor(private service: UsersCardsService) {}

//   ngOnInit(): void {
//     this.fetchAllUsers();
//   }

//   onSearch() {
//     if (this.id.trim() !== '') {
//       this.service.getUserbyid(this.id).subscribe(
//         user => {
//           this.searchUser = user;
//           console.log(this.searchUser);
//         },
//         error => {
//           console.error('Error fetching user by ID:', error);
//         }
//       );
//     } else {
//       // If the search field is empty, reset searchUser to null
//       this.searchUser = null;
//     }
//   }

//   fetchAllUsers() {
//     this.service.getUser().subscribe(
//       response => {
//         this.users = response.data; // Assuming the user data is inside a 'data' property
//         console.log(response);
//       },
//       error => {
//         console.error('Error fetching users:', error);
//       }
//     );
//   }
// }



  // getUsersById(id:any) {
  //   this.service.getUserbyid(this.id).subscribe(
  //     (user: any) => {
  //       console.log(user);
  //     },
  //     (error: any) => {
  //       console.error('An error occurred:', error);
  //     }
  //   );
  // }