import { ContactModule } from './features/contact/contact.module';
/*ANGULAR*/
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ModalModule } from 'ngx-bootstrap/modal';

/*FEATURES*/
import { AuthModule } from './auth/auth.module';
import { CeeModule } from './features/cee/cee.module';
import { GroupModule } from './features/group/group.module';
import { HomeModule } from './features/home/home.module';
import { InstitutionModule } from './features/institution/institution.module';
import { LayoutModule } from './layout/layout.module';
import { ProfileModule } from './features/profile/profile.module';
import { UserModule } from './features/user/user.module';

// import { SortByPipe } from './pipes/sort-by.pipe';
import { SorteadorModule } from './features/others/sorteador/sorteador.module';
import { ToastrModule } from 'ngx-toastr';
import { PipesModule } from 'w-ng5';
import { ChatModule } from './features/chat/chat.module';

/*OTHERS*/

@NgModule({
  declarations: [
    AppComponent

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
export class AppModule { }
