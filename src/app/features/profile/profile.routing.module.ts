import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileMainTimelineComponent } from './profile-card-main/profile-main-timeline/profile-main-timeline.component';
import { ProfileMainUserconfigComponent } from './profile-card-main/profile-main-userconfig/profile-main-userconfig.component';
import { ProfileMainUserdataComponent } from './profile-card-main/profile-main-userdata/profile-main-userdata.component';
import { ProfileFormModalComponent } from './profile-form-modal/profile-form-modal.component';
import { ProfilePersonalComponent } from './profile-personal/profile-personal.component';
import { ProfileComponent } from './profile.component';

export const ProfileRouting: Routes = [
  { path: "", component: ProfileComponent },
  { path: "form", component: ProfileFormModalComponent },
  { path: "personal", redirectTo: "personal/userdata", pathMatch: "full" },
  {
    path: "personal", component: ProfilePersonalComponent,
    // canActivate: [AuthGuard, PermissionGuard],
    children: [
      { path: "activity", component: ProfileMainTimelineComponent },
      { path: "userdata", component: ProfileMainUserdataComponent },
      { path: "settings", component: ProfileMainUserconfigComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(ProfileRouting)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
