import { Route } from '@angular/router';
import { ChatDirectModalComponent } from '../chat/chat-direct-modal/chat-direct-modal.component';
import { ChatComponent } from '../chat/chat.component';
import { CeeDashboardComponent } from './cee-dashboard/cee-dashboard.component';
import { CeeHomeComponent } from './cee-home/cee-home.component';
import { CeeInstitutionFormComponent } from './cee-institution/cee-institution-form/cee-institution-form.component';
import { CeeInstitutionViewComponent } from './cee-institution/cee-institution-view/cee-institution-view.component';
import { CeeInstitutionComponent } from './cee-institution/cee-institution.component';
import { CeeUserComponent } from './cee-user/cee-user.component';
import { CeeComponent } from './cee.component';

export const CeeRouting: Route = {
  path: "cee", component: CeeComponent,
  // canActivate: [AuthGuard, PermissionGuard],
  children: [
    {
      path: "home", component: CeeHomeComponent,
      // canActivate: [AuthGuard, PermissionGuard]
    },
    { path: "document", loadChildren: () => import("./../document/document.module").then(m => m.DocumentModule) },
    { path: "process", loadChildren: () => import("./../process/process.module").then(m => m.ProcessModule) },
    // {
    //   path: "document", component: CeeDocumentComponent,
    //   // canActivate: [AuthGuard, PermissionGuard]
    // },
    {
      path: "user", component: CeeUserComponent,
      // canActivate: [AuthGuard, PermissionGuard],
      // children: [
      // ]
    },
    {
      path: "dashboard", component: CeeDashboardComponent,
      // canActivate: [AuthGuard, PermissionGuard]
    },

    { path: "institution", component: CeeInstitutionComponent },
    { path: "institution/form", component: CeeInstitutionFormComponent },
    { path: "institution/view", component: CeeInstitutionViewComponent },


    { path: "chat", component: ChatComponent },
    { path: "chat/direct", component: ChatDirectModalComponent }
  ]
}
