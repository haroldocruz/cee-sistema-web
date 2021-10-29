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
import { CeeDocumentViewComponent } from './cee-document/cee-document-view/cee-document-view.component';
import { CeeDocumentListComponent } from './cee-document/cee-document-list/cee-document-list.component';
import { CeeDocumentFilterComponent } from './cee-document/cee-document-filter/cee-document-filter.component';
import { CeeInstitutionComponent } from './cee-institution/cee-institution.component';
import { CeeInstitutionFilterComponent } from './cee-institution/cee-institution-filter/cee-institution-filter.component';
import { CeeInstitutionListComponent } from './cee-institution/cee-institution-list/cee-institution-list.component';
import { CeeUserBindComponent } from './cee-user/cee-user-bind/cee-user-bind.component';
import { NgxMaskModule } from 'ngx-mask';
import { ProfileCardComponent } from 'src/app/directives/profile-card/profile-card.component';
import { CeeProfileBindListComponent } from './cee-profile/cee-profile-bind-list/cee-profile-bind-list.component';



@NgModule({
  declarations: [

    SortByPipe,
    
    CeeHomeComponent,
    CeeComponent,
    CeeUserComponent,
    CeeDashboardComponent,
    CeeUserViewComponent,
    CeeDocumentComponent,
    CeeDocumentViewComponent,
    CeeDocumentListComponent,
    CeeDocumentFilterComponent,
    CeeInstitutionComponent,
    CeeInstitutionFilterComponent,
    CeeInstitutionListComponent,
    CeeUserBindComponent,

    ProfileCardComponent,
      CeeProfileBindListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,

    PipesModule,
    NgxMaskModule
  ]
})
export class CeeModule { }
