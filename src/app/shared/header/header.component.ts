import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SearchService } from './search.service';
import { user } from '../../users/user.model'; 

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() searchResults = new EventEmitter<any>(); 
  searchQuery: string = ''; // Store the search query entered by the user
  suggestedUsers: user[] = []; // Store suggested users based on the search query
  searchUserId: any;

  constructor(private searchService: SearchService) {}

  ngOnInit(): void {}

  onSearchChange(): void {
    // Call the search service to fetch suggested users based on the search query
    this.searchService.getUserbyid(this.searchQuery).subscribe((suggestedUsers: any) => {
      this.suggestedUsers = suggestedUsers;
      this.searchResults.emit(suggestedUsers.data);
    });
  }

  selectUser(user: user): void {
    this.searchQuery = '';
    this.suggestedUsers = [];
  }

}




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

  // getUsers() {
  //   this.service.getUser().subscribe((res: any) => {
  //     this.users = Object.keys(res).map(key => res[key]);
  //     // console.log(res);
  //     // console.log(this.users);
  //   });
  // }

  // searchUser() {
  //   if (this.id && this.users) {
  //     this.filteredUser = this.users.find(user => user.id === this.id);
  //     // If user with the input ID exists, assign it to filteredUser
  //     // Otherwise, assign null to filteredUser
  //   } else {
  //     this.filteredUser = null;
  //   }
  //   console.log(this.filteredUser);
  // }
