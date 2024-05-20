import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersCardsComponent } from './users/users-cards/users-cards.component';
import { UsersDetailsComponent } from './users/users-details/users-details.component';

const routes: Routes = [
  {path:"users", component:UsersCardsComponent},
  {path:"details/:id", component:UsersDetailsComponent},
  {path:"**", redirectTo:"users", pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
