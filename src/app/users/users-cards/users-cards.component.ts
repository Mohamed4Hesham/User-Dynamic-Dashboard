  import { Component, Input, OnInit,SimpleChanges } from '@angular/core';
  import { UsersCardsService } from './Services/users-cards.service';
  import { user } from '../user.model'; // Assuming User model is defined
  import { Router } from '@angular/router';


  @Component({
    selector: 'app-users-cards',
    templateUrl: './users-cards.component.html',
    styleUrls: ['./users-cards.component.css'] 
  })
  
  export class UsersCardsComponent implements OnInit {
    @Input() searchUserId: string = ''; // Renamed input property
    user: user[] = []; // Assuming User model is used
    p: number = 1; // Renamed pagination properties
    usersPerpage: number = 3; // Renamed pagination properties
    searchedUserId: string = ''; // Renamed searchedUserId property
    loading: boolean = false;
    users:any[]=[]
    filteredUsers: user = {
      avatar: undefined,
      first_name: undefined,
      last_name:undefined,
      id: undefined,
      email: undefined
    };
    
    constructor(private service: UsersCardsService, private router: Router) { }

    ngOnInit(): void {
      this.getUsers();
    }

    ngOnChanges(changes: SimpleChanges): void {
      if (changes['searchUserId']) {
        this.filterUsers(this.searchUserId);
        console.log(this.searchUserId,"hellooo") // Filter users when searchUserId changes
      }
    }

    getUsers() {
      this.loading =true;
      this.service.getUser().subscribe((res: any) => {
        this.users = Object.keys(res).map(key => res[key]);
        this.filterUsers(this.searchedUserId);
      });
      this.loading=false;
    }


    filterUsers(searchedUserResult: any) {
      this.loading =true;
      if(searchedUserResult.id ){
        this.filteredUsers = searchedUserResult
      }else{
        this.loading =true;
      this.filteredUsers = {
        avatar: undefined,
        first_name: undefined,
        last_name:undefined,
        id: undefined,
        email: undefined
        };
      }
      this.p = 1; 
      this.loading =false;
    }

    checkMoredetails(){
      this.loading =true;
        this.router.navigate(['/details', this.filteredUsers.id]);
        this.loading =false;
    }
  }





    // onPageChange(page: number) {
    //   this.p = page;
    //   // Pagination logic if needed
    // }

    // backTohome(){
    //   this.filteredUsers = {
    //     avatar: undefined,
    //     first_name: undefined,
    //     last_name:undefined,
    //     id: undefined,
    //     email: undefined
    //     };
    // }



 