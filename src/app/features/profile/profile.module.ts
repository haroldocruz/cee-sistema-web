import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipesModule } from 'w-ng5';

import { ProfileListComponent } from './profile-list/profile-list.component';
import { ProfileFormModalComponent } from './profile-form-modal/profile-form-modal.component';
import { ProfileComponent } from './profile.component';
import { ProfileCardMainComponent } from './profile-card-main/profile-card-main.component';
import { ProfileCardAboutmeComponent } from './profile-card-aboutme/profile-card-aboutme.component';
import { ProfileCardImageComponent } from './profile-card-image/profile-card-image.component';
import { ProfileMainTimelineComponent } from './profile-card-main/profile-main-timeline/profile-main-timeline.component';
import { ProfileMainUserdataComponent } from './profile-card-main/profile-main-userdata/profile-main-userdata.component';
import { ProfileMainUserconfigComponent } from './profile-card-main/profile-main-userconfig/profile-main-userconfig.component';
import { ProfilePersonalComponent } from './profile-personal/profile-personal.component';
import { ProfileFilterComponent } from './profile-filter/profile-filter.component';
import { NgxMaskModule } from 'ngx-mask';
import { ProfileRoutingModule } from './profile.routing.module';

@NgModule({
    declarations: [
        ProfileListComponent,
        ProfileFormModalComponent,
        ProfileComponent,
        ProfileCardMainComponent,
        ProfileCardAboutmeComponent,
        ProfileCardImageComponent,
        ProfileMainTimelineComponent,
        ProfileMainUserdataComponent,
        ProfileMainUserconfigComponent,
        ProfilePersonalComponent,
        ProfileFilterComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ProfileRoutingModule,

        PipesModule,
        NgxMaskModule
    ]
})
export class ProfileModule { }
