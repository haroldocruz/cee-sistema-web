import { InstitutionModule } from './features/institution/institution.module';
import { LayoutModule } from './layout/layout.module';
import { AppRoutingModule } from './app-routing.module';

import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserComponent } from './features/user/user.component';
import { UserFormModalComponent } from './features/user/user-form-modal/user-form-modal.component';
import { UserListComponent } from './features/user/user-list/user-list.component';

import { PipesModule } from "w-ng5";
import { SortByPipe } from './pipes/sort-by.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserFormModalComponent,
    UserListComponent,
    SortByPipe,
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

    PipesModule,

    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
