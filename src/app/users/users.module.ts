import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersCardsComponent } from './users-cards/users-cards.component';
import { UsersDetailsComponent } from './users-details/users-details.component';
import { SharedModule } from '../shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { UsersCardsService } from './users-cards/Services/users-cards.service';


@NgModule({
  declarations: [
    UsersCardsComponent,
    UsersDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    BrowserModule,
    HttpClientModule, 
    RouterModule,
    NgxPaginationModule
  ],
  exports:[
    UsersCardsComponent,
    UsersDetailsComponent
  ],
  providers: [UsersCardsService]
})
export class UsersModule { }
