import { Component, OnInit } from '@angular/core';
import { UsersCardsService } from '../users-cards/Services/users-cards.service';
import { user } from '../user.model';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrl: './users-details.component.css'
})
export class UsersDetailsComponent implements OnInit{
  id:any;
  loading: boolean = false;
  filteredUsers: user = {
    avatar: undefined,
    first_name: undefined,
    last_name:undefined,
    id: undefined,
    email: undefined
  };

  constructor(private service:UsersCardsService, private route: ActivatedRoute, private router: Router){
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id, "we are gonna make it inshallaah");
  }

  ngOnInit(): void {
      this.getUserDetails(this.id);
  }

  getUserDetails(id: string) {
    this.loading = true;
    this.service.getUserbyid(id).subscribe(
      (res: any) => {
        console.log(res, "Fetched User Data");
        this.filteredUsers = {
          avatar: res.data.avatar,
          first_name: res.data.first_name,
          last_name: res.data.last_name,
          id: res.data.id,
          email: res.data.email
        };
        this.loading = false;
      },
      (error) => {
        console.error("Error fetching user details:", error);
      }
    );
  }

  BackButton(){
    this.loading =true
    this.router.navigate(['/users']);
    this.loading = false;
  }

  // getUserDetails(id: string) {
  //   this.service.getUserbyid(id).subscribe(
  //     (res: user) => {
  //       console.log(res, "todday");
  //       this.filteredUsers = res; // Assign the response to filteredUsers
  //     },
  //     (error) => {
  //       console.error("Error fetching user details:", error);
  //     }
  //   );
  // }


  
}
