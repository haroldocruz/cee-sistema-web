import { AuthModule } from './../auth/auth.module';
import { FormsModule } from '@angular/forms';
import { NavPerfilComponent } from './nav/nav-perfil/nav-perfil.component';
import { AppRoutingModule } from './../app-routing.module';
import { LayoutComponent } from './layout.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { TopComponent } from './top/top.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavLogoComponent } from './nav/nav-logo/nav-logo.component';
import { NavMenuComponent } from './nav/nav-menu/nav-menu.component';
import { NavMenuCeeComponent } from './nav/nav-menu/nav-menu-cee/nav-menu-cee.component';
import { NavMenuInstitutionComponent } from './nav/nav-menu/nav-menu-institution/nav-menu-institution.component';
import { NavMenuCommissionComponent } from './nav/nav-menu/nav-menu-commission/nav-menu-commission.component';
import { NavMenuManagerComponent } from './nav/nav-menu/nav-menu-manager/nav-menu-manager.component';

@NgModule({
  declarations: [
    LayoutComponent,
    TopComponent,
    NavComponent,
    NavPerfilComponent,
    FooterComponent,
    NavLogoComponent,
    NavMenuComponent,
    NavMenuCeeComponent,
    NavMenuInstitutionComponent,
    NavMenuCommissionComponent,
    NavMenuManagerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,

    AuthModule
  ],
  providers: []
})
export class LayoutModule { }
