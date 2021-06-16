import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeAssignmentComponent } from './home-assignment/home-assignment.component';
import { HomeWelcomeComponent } from './home-welcome/home-welcome.component';



@NgModule({
  declarations: [
    HomeComponent,
    HomeAssignmentComponent,
    HomeWelcomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class HomeModule { }
