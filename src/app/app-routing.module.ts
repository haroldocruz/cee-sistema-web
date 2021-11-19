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
import { UserComponent } from './features/user/user.component';
import { ChatRouting } from './features/chat/chat.routing.module';
import { ProfileRouting } from './features/profile/profile.routing.module';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  //   { path: "", redirectTo: "/login", pathMatch: "full" },
  SorteadorRouting,
  { path: "sorteador", component: SorteadorComponent },
  { path: "login", component: AuthComponent },
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
      CeeRouting,
      ChatRouting,
      InstitutionRouting,
      ...ProfileRouting,
      {
        path: "user", component: UserComponent,
        //   canActivate: [AuthGuard, PermissionGuard]
      },
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
