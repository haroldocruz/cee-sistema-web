import { UserFormViewComponent } from './user-form-view/user-form-view.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PipesModule } from 'w-ng5';

import { UserComponent } from './user.component';
import { UserFormModalComponent } from './user-form-modal/user-form-modal.component';
import { UserListComponent } from './user-list/user-list.component';

// import { SortByPipe } from './../../pipes/sort-by.pipe';
import { UserViewModalComponent } from './user-view-modal/user-view-modal.component';
import { UserProfileEditModalComponent } from './user-profile-edit-modal/user-profile-edit-modal.component';
import { UserPasswordFormModalComponent } from './user-password-form-modal/user-password-form-modal.component';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [
    UserComponent,
    UserFormModalComponent,
    UserFormViewComponent,
    UserListComponent,

    // SortByPipe,

    UserViewModalComponent,

    UserProfileEditModalComponent,
      UserPasswordFormModalComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,

    PipesModule,
    
    NgxMaskModule.forRoot(),
  ]
})
export class UserModule { }
