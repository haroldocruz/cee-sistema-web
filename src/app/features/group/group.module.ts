import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipesModule } from 'w-ng5';

import { GroupListComponent } from './group-list/group-list.component';
import { GroupFormModalComponent } from './group-form-modal/group-form-modal.component';
import { GroupComponent } from './group.component';

@NgModule({
  declarations: [
    GroupListComponent,
    GroupFormModalComponent,
    GroupComponent
  ],
  imports: [
    CommonModule,
    FormsModule,

    PipesModule,
  ]
})
export class GroupModule { }
