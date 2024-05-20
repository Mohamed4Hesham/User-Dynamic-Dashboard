  import { Component, Input, OnInit,SimpleChanges } from '@angular/core';
  import { UsersCardsService } from './Services/users-cards.service';
  import { user } from '../user.model'; 
  import { Router } from '@angular/router';


  @Component({
    selector: 'app-users-cards',
    templateUrl: './users-cards.component.html',
    styleUrls: ['./users-cards.component.css'] 
  })
  
  export class UsersCardsComponent implements OnInit {
    @Input() searchUserId: string = ''; 
    user: user[] = []; 
    p: number = 1; 
    usersPerpage: number = 3; 
    searchedUserId: string = ''; 
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



