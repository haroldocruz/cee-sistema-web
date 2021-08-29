import { AuthGuard } from 'src/app/guards/auth.guard';
import { PermissionGuard } from 'src/app/guards/permission.guard';
import { CeeDashboardComponent } from './cee-dashboard/cee-dashboard.component';
import { CeeDocumentComponent } from './cee-document/cee-document.component';
import { CeeHomeComponent } from './cee-home/cee-home.component';
import { CeeUserViewComponent } from './cee-user/cee-user-view/cee-user-view.component';
import { CeeUserComponent } from './cee-user/cee-user.component';
import { CeeComponent } from './cee.component';

export const CeeRouting = {
  path: "cee", component: CeeComponent,
  // canActivate: [AuthGuard, PermissionGuard],
  children: [
    {
      path: "home", component: CeeHomeComponent,
      // canActivate: [AuthGuard, PermissionGuard]
    },
    {
      path: "document", component: CeeDocumentComponent,
      // canActivate: [AuthGuard, PermissionGuard]
    },
    {
      path: "user", component: CeeUserComponent,
      // canActivate: [AuthGuard, PermissionGuard],
      // children: [
      // ]
    },
    {
      path: "view", component: CeeUserViewComponent
    },
    {
      path: "dashboard", component: CeeDashboardComponent,
      // canActivate: [AuthGuard, PermissionGuard]
    },
    // { path: "process", component: MaintainedComponent },
    // { path: "institution", component: MaintainerComponent },
    // { path: "instrument", component: ProcuratorComponent, canActivate: [AuthGuard, PermissionGuard] },
  ]
}
