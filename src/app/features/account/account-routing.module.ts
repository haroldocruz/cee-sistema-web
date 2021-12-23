import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountMainActivityComponent } from './account-main/account-main-activity/account-main-activity.component';
import { AccountMainPersonalComponent } from './account-main/account-main-personal/account-main-personal.component';
import { AccountMainSettingsComponent } from './account-main/account-main-settings/account-main-settings.component';
import { AccountComponent } from './account.component';

const AccountRouting: Routes = [
  { path: "", redirectTo: "personal", pathMatch: "full" },
  {
    path: "", component: AccountComponent,
    // canActivate: [AuthGuard, PermissionGuard],
    children: [
      { path: "activity", component: AccountMainActivityComponent },
      { path: "personal", component: AccountMainPersonalComponent },
      { path: "settings", component: AccountMainSettingsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(AccountRouting)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
