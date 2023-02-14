import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './../app-routing.module';
import { AuthModule } from './../auth/auth.module';
import { FooterComponent } from './footer/footer.component';
import { LayoutTopFooterComponent } from './layout-top-footer/layout-top-footer.component';
import { LayoutComponent } from './layout.component';
import { NavLogoComponent } from './nav/nav-logo/nav-logo.component';
import { NavMenuCeeComponent } from './nav/nav-menu/nav-menu-cee/nav-menu-cee.component';
import { NavMenuCommissionComponent } from './nav/nav-menu/nav-menu-commission/nav-menu-commission.component';
import { NavMenuInstitutionComponent } from './nav/nav-menu/nav-menu-institution/nav-menu-institution.component';
import { NavMenuManagerComponent } from './nav/nav-menu/nav-menu-manager/nav-menu-manager.component';
import { NavMenuComponent } from './nav/nav-menu/nav-menu.component';
import { NavPerfilComponent } from './nav/nav-perfil/nav-perfil.component';
import { NavComponent } from './nav/nav.component';
import { TopComponent } from './top/top.component';
import { LayoutFullComponent } from './layout-full/layout-full.component';

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
        NavMenuManagerComponent,
        LayoutTopFooterComponent,
        LayoutFullComponent
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
