import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { AccountAboutmeComponent } from './account-aboutme/account-aboutme.component';
import { AccountImageComponent } from './account-image/account-image.component';
import { AccountMainComponent } from './account-main/account-main.component';
import { AccountMainPersonalComponent } from './account-main/account-main-personal/account-main-personal.component';
import { AccountMainActivityComponent } from './account-main/account-main-activity/account-main-activity.component';
import { AccountMainSettingsComponent } from './account-main/account-main-settings/account-main-settings.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AccountComponent,
    AccountAboutmeComponent,
    AccountImageComponent,
    AccountMainComponent,
    AccountMainPersonalComponent,
    AccountMainActivityComponent,
    AccountMainSettingsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AccountRoutingModule
  ]
})
export class AccountModule { }
