import { Route } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
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
    { path: "document", canActivate: [ AuthGuard ], loadChildren: () => import("./../document/document.module").then(m => m.DocumentModule) },
    { path: "instrument", canActivate: [ AuthGuard ], loadChildren: () => import("./instrument/instrument.module").then(m => m.InstrumentModule) },
    { path: "process", canActivate: [ AuthGuard ], loadChildren: () => import("./../process/process.module").then(m => m.ProcessModule) },
    // {import { AuthGuard } from '../../guards/auth.guard';

    //   path: "document", component: CeeDocumentComponent,
    //   // canActivate: [AuthGuard, PermissionGuard]
    // },
    {
      path: "user", canActivate: [ AuthGuard ], component: CeeUserComponent,
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
