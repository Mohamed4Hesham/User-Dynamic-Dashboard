import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SearchService } from './search.service';
import { user } from '../../users/user.model'; // Import User model if not already imported

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() searchUserIdChanged = new EventEmitter<string>(); // Emit User type for search user
  @Output() searchResults = new EventEmitter<any>(); // Emit User type for search user
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
      console.log(suggestedUsers, "hello");  
    });
  }

  selectUser(user: user): void {
    // Emit the selected user when the user clicks on a suggested user
    this.searchUserIdChanged.emit(this.searchUserId);
    // Clear the search query and suggested users
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
