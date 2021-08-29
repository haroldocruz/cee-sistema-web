import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './../../app-routing.module';

import { MaintainerComponent } from './maintainer/maintainer.component';
import { MaintainedComponent } from './maintained/maintained.component';
import { CourseComponent } from './course/course.component';
import { InstitutionComponent } from './institution.component';
import { ProcuratorComponent } from './procurator/procurator.component';
import { AuxiliaryComponent } from './auxiliary/auxiliary.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InstitutionHomeComponent } from './institution-home/institution-home.component';
import { InstitutionUserComponent } from './institution-user/institution-user.component';

@NgModule({
  declarations: [
    InstitutionComponent,
    CourseComponent,
    MaintainedComponent,
    MaintainerComponent,
    ProcuratorComponent,
    AuxiliaryComponent,
    DashboardComponent,
    InstitutionHomeComponent,
    InstitutionUserComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class InstitutionModule { }
