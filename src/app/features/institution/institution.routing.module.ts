import { InstitutionUserComponent } from './institution-user/institution-user.component';
import { InstitutionHomeComponent } from './institution-home/institution-home.component';
import { PermissionGuard } from './../../guards/permission.guard';
import { AuthGuard } from './../../guards/auth.guard';
import { AuxiliaryComponent } from './auxiliary/auxiliary.component';
import { ProcuratorComponent } from './procurator/procurator.component';
import { CourseComponent } from './course/course.component';
import { MaintainerComponent } from './maintainer/maintainer.component';
import { MaintainedComponent } from './maintained/maintained.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InstitutionComponent } from './institution.component';


export const InstitutionRouting = {
  path: "institution", component: InstitutionComponent,
  // canActivate: [AuthGuard, PermissionGuard],
  children: [
    { path: "home", component: InstitutionHomeComponent },
    { path: "dashboard", component: DashboardComponent },
    { path: "maintained", component: MaintainedComponent },
    { path: "maintainer", component: MaintainerComponent },
    {
      path: "course", component: CourseComponent,
      // canActivate: [AuthGuard, PermissionGuard]
    },
    { path: "user", component: InstitutionUserComponent },
    { path: "procurator", component: ProcuratorComponent },
    { path: "auxiliary", component: AuxiliaryComponent },
  ]
}
