import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';

const UserRouting: Routes = [
  { path: "", component: UserComponent },
];

@NgModule({
  imports: [RouterModule.forChild(UserRouting)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
