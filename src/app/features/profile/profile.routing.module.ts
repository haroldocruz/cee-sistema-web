import { ProfileMainTimelineComponent } from './profile-card-main/profile-main-timeline/profile-main-timeline.component';
import { ProfileMainUserconfigComponent } from './profile-card-main/profile-main-userconfig/profile-main-userconfig.component';
import { ProfileMainUserdataComponent } from './profile-card-main/profile-main-userdata/profile-main-userdata.component';
import { ProfilePersonalComponent } from './profile-personal/profile-personal.component';
import { ProfileComponent } from './profile.component';

export const ProfileRouting = [
  { path: "profile", component: ProfileComponent },
  { path: "profile/personal", redirectTo: "profile/personal/userdata", pathMatch: "full" },
  {
    path: "profile/personal", component: ProfilePersonalComponent,
    // canActivate: [AuthGuard, PermissionGuard],
    children: [
      { path: "activity", component: ProfileMainTimelineComponent },
      { path: "userdata", component: ProfileMainUserdataComponent },
      { path: "settings", component: ProfileMainUserconfigComponent }
    ]
  }
]