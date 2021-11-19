import { NotificationService } from './../../../services/notification.service';
import { ProfileLocalService } from '../profile.local.service';
import { Component, Input, OnInit } from '@angular/core';
import { IProfile, Profile } from 'src/app/interfaces/Profile';
import { EventEmitterService } from 'src/app/services/event-emitter.service';
import { ProfileService } from 'src/app/services/profile.service';
import { UtilService } from 'src/app/services/util.service';

@Component({
    selector: 'app-profile-list',
    templateUrl: './profile-list.component.html',
    styleUrls: ['./profile-list.component.less']
})
export class ProfileListComponent implements OnInit {

    @Input() profileList: IProfile[];

    constructor(
        public profileLocalService: ProfileLocalService,
        public profileService: ProfileService,
        private notify: NotificationService
    ) { }

    ngOnInit(): void {
        this.index();

        EventEmitterService.get('is-success').subscribe((isSuccess) => {
            if (isSuccess)
                this.index();
        });
    }

    index(): void {
        this.profileService.read().subscribe((data) => {
            this.profileList = data
            console.log("data", data.length);
        })
    }

    edit(profile: IProfile | null) {
        ProfileLocalService.profile = (profile) ? profile : new Profile();
    }

    delete(id): void {
        UtilService.default(this.profileService.delete(id));
    }

}
