import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { AuthBindListComponent } from './auth-bind-list/auth-bind-list.component';
import { AuthRoutingModule } from './auth-routing.module';



@NgModule({
  declarations: [
    AuthComponent,
    AuthBindListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule
  ],
  exports: [
    AuthComponent,
    AuthBindListComponent
  ]
})
export class AuthModule { }
