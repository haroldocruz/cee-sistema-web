import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxMaskModule } from 'ngx-mask';
import { PipesModule } from 'w-ng5';
// import { SortByPipe } from './../../pipes/sort-by.pipe';

import { UserRoutingModule } from './user.routing.module';
import { UserComponent } from './user.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserViewModalComponent } from './user-view-modal/user-view-modal.component';
import { UserProfileEditModalComponent } from './user-profile-edit-modal/user-profile-edit-modal.component';
import { UserPasswordFormModalComponent } from './user-password-form-modal/user-password-form-modal.component';
import { UserFilterComponent } from './user-filter/user-filter.component';

@NgModule({
  declarations: [
    // SortByPipe,

    UserComponent,
    UserFilterComponent,
    UserFormComponent,
    UserListComponent,

    UserViewModalComponent,

    UserProfileEditModalComponent,
    UserPasswordFormModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UserRoutingModule,

    PipesModule,

    NgxMaskModule.forChild(),
  ]
})
export class UserModule { }
