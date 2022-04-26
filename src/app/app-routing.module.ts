import { GroupComponent } from './features/group/group.component';
import { PermissionGuard } from './guards/permission.guard';
import { AuthGuard } from './guards/auth.guard';
import { AuthComponent } from './auth/auth.component';
import { HomeWelcomeComponent } from './features/home/home-welcome/home-welcome.component';
import { HomeAssignmentComponent } from './features/home/home-assignment/home-assignment.component';
import { SorteadorComponent } from './features/others/sorteador/sorteador.component';

import { InstitutionRouting } from './features/institution/institution.routing.module';
import { CeeRouting } from './features/cee/cee.routing.module';
import { SorteadorRouting } from './features/others/sorteador/sorteador-routing.module';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './features/home/home.component';
import { ChatRouting } from './features/chat/chat.routing.module';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "auth", loadChildren: () => import("./auth/auth.module").then(m => m.AuthModule) },
  // { path: "login", component: AuthComponent },
  {
    path: "", component: LayoutComponent, children: [
      { path: "home", redirectTo: "/home/boas-vindas", pathMatch: "full" },
      {
        path: "home", component: HomeComponent,
        children: [
          { path: "boas-vindas", component: HomeWelcomeComponent },
          { path: "atribuicoes", component: HomeAssignmentComponent }
        ]
      },
      { path: "account", loadChildren: () => import("./features/account/account.module").then(m => m.AccountModule), canActivate: [ AuthGuard ] },
      { path: "document", loadChildren: () => import("./features/document/document.module").then(m => m.DocumentModule), canActivate: [ AuthGuard ] },
      { path: "process", loadChildren: () => import("./features/process/process.module").then(m => m.ProcessModule), canActivate: [ AuthGuard ] },
      { path: "profile", loadChildren: () => import("./features/profile/profile.module").then(m => m.ProfileModule), canActivate: [ AuthGuard ] },
      { path: "user", loadChildren: () => import("./features/user/user.module").then(m => m.UserModule), canActivate: [ AuthGuard ] },
      { path: "sorteador", loadChildren: () => import("./features/others/sorteador/sorteador.module").then(m => m.SorteadorModule) },
      CeeRouting,
      ChatRouting,
      InstitutionRouting,
      { path: "group", component: GroupComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    // { onSameUrlNavigation: 'reload' }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
