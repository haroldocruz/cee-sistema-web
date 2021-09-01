import { ProfileMainTimelineComponent } from './profile-card-main/profile-main-timeline/profile-main-timeline.component';
import { ProfileMainUserconfigComponent } from './profile-card-main/profile-main-userconfig/profile-main-userconfig.component';
import { ProfileMainUserdataComponent } from './profile-card-main/profile-main-userdata/profile-main-userdata.component';
import { ProfileComponent } from './profile.component';

// ! NÃO ESTÁ SENDO USADO
export const ProfileRouting = [
  { path: "profile", redirectTo: "profile/personal", pathMatch: "full" },
  {
    path: "profile", component: ProfileComponent,
    // canActivate: [AuthGuard, PermissionGuard],
    children: [
      { path: "activity", component: ProfileMainTimelineComponent },
      { path: "personal", component: ProfileMainUserdataComponent },
      { path: "settings", component: ProfileMainUserconfigComponent }
    ]
  }
]