import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { AuthListModalComponent } from './auth-list-modal/auth-list-modal.component';
import { AuthBindListComponent } from './auth-bind-list/auth-bind-list.component';



@NgModule({
  declarations: [
    AuthComponent,
    AuthListModalComponent,
    AuthBindListComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    AuthComponent,
    AuthListModalComponent,
    AuthBindListComponent
  ]
})
export class AuthModule { }
