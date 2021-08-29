import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CeeHomeComponent } from './cee-home/cee-home.component';
import { CeeComponent } from './cee.component';
import { CeeUserComponent } from './cee-user/cee-user.component';
import { CeeDashboardComponent } from './cee-dashboard/cee-dashboard.component';
import { CeeUserViewComponent } from './cee-user/cee-user-view/cee-user-view.component';
import { SortByPipe } from 'src/app/pipes/sort-by.pipe';
import { PipesModule } from 'w-ng5';
import { FormsModule } from '@angular/forms';
import { CeeDocumentComponent } from './cee-document/cee-document.component';



@NgModule({
  declarations: [

    SortByPipe,
    
    CeeHomeComponent,
    CeeComponent,
    CeeUserComponent,
    CeeDashboardComponent,
    CeeUserViewComponent,
    CeeDocumentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,

    PipesModule
  ]
})
export class CeeModule { }
