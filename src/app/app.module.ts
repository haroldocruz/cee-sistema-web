/*ANGULAR*/
import { HttpClientModule } from "@angular/common/http";
import { Injector, NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

/*FEATURES*/
import { ContactModule } from './features/contact/contact.module';
import { AuthModule } from './auth/auth.module';
import { CeeModule } from './features/cee/cee.module';
import { GroupModule } from './features/group/group.module';
import { HomeModule } from './features/home/home.module';
import { InstitutionModule } from './features/institution/institution.module';
import { LayoutModule } from './layout/layout.module';
import { ProfileModule } from './features/profile/profile.module';
import { UserModule } from './features/user/user.module';
import { ChatModule } from './features/chat/chat.module';
import { SorteadorModule } from './features/others/sorteador/sorteador.module';

import { FilterButtonsDirective } from './directives/filter-buttons.directive';
import { NotificationService } from './services/notification.service';
import { UtilService } from './services/util.service';
// import { SortByPipe } from './pipes/sort-by.pipe';

/*OTHERS*/
import { ModalModule } from 'ngx-bootstrap/modal';
import { ToastrModule } from 'ngx-toastr';
import { PipesModule } from 'w-ng5';
import { EvidenceFormComponent } from "./directives/evidence-form/evidence-form.component";
import { NgxMaskModule } from "ngx-mask";

@NgModule({
  declarations: [
    AppComponent,
    EvidenceFormComponent,
    FilterButtonsDirective

    // SortByPipe
  ],
  imports: [
    /*ANGULAR*/
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,

    ModalModule.forRoot(),
    ToastrModule.forRoot({ positionClass:'toast-top-right', closeButton: true }),
    PipesModule,
    NgxMaskModule,

    /*FEATURES*/
    AuthModule,
    CeeModule,
    ChatModule,
    ContactModule,
    GroupModule,
    HomeModule,
    InstitutionModule,
    LayoutModule,
    ProfileModule,
    UserModule,

    /*OTHERS*/
    SorteadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor(
    private notify: NotificationService,
    private title: Title
  ){
    UtilService.notifying = notify;
    UtilService.Title = title;
  }
}
