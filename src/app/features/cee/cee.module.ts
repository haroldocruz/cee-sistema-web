import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PipesModule } from 'w-ng5';
import { NgxMaskModule } from 'ngx-mask';
import { NgxChartsModule } from "@swimlane/ngx-charts";

import { CeeComponent } from './cee.component';
import { CeeDashboardComponent } from './cee-dashboard/cee-dashboard.component';
import { CeeHomeComponent } from './cee-home/cee-home.component';

import { CeeInstitutionComponent } from './cee-institution/cee-institution.component';
import { CeeInstitutionFilterComponent } from './cee-institution/cee-institution-filter/cee-institution-filter.component';
import { CeeInstitutionListComponent } from './cee-institution/cee-institution-list/cee-institution-list.component';
import { CeeInstitutionViewComponent } from './cee-institution/cee-institution-view/cee-institution-view.component';
import { CeeInstitutionFormComponent } from './cee-institution/cee-institution-form/cee-institution-form.component';

import { CeeProfileBindListComponent } from './cee-profile/cee-profile-bind-list/cee-profile-bind-list.component';

import { CeeUserComponent } from './cee-user/cee-user.component';
import { CeeUserListComponent } from './cee-user/cee-user-list/cee-user-list.component';
import { CeeUserBindComponent } from './cee-user/cee-user-bind/cee-user-bind.component';

import { UtilModule } from 'src/app/util/util.module';

@NgModule({
  declarations: [

    CeeHomeComponent,
    CeeComponent,
    CeeDashboardComponent,

    CeeInstitutionComponent,
    CeeInstitutionFilterComponent,
    CeeInstitutionFormComponent,
    CeeInstitutionListComponent,
    CeeInstitutionViewComponent,

    CeeProfileBindListComponent,
    
    CeeUserComponent,
    CeeUserBindComponent,
    CeeUserListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,

    PipesModule,
    NgxChartsModule,
    NgxMaskModule.forChild(),

    UtilModule
  ]
})
export class CeeModule { }
