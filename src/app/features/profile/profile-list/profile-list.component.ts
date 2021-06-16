import { NotificationService } from './../../../services/notification.service';
import { ProfileService } from './../profile.service';
import { Component, OnInit } from '@angular/core';
import { IProfile, Profile } from 'src/app/interfaces/Profile';

@Component({
    selector: 'app-profile-list',
    templateUrl: './profile-list.component.html',
    styleUrls: ['./profile-list.component.less']
})
export class ProfileListComponent implements OnInit {

    constructor(public profileService: ProfileService, private notify: NotificationService) { }

    ngOnInit(): void {
        this.index()
    }

    index(): void {
        this.profileService.index();
    }

    edit(profile: IProfile | null) {
        this.profileService.profile = (profile) ? profile : new Profile();
    }

    delete(id): void {
        this.profileService.delete(id).subscribe((data) => {
            this.profileService.index();
            this.notify.showSuccess(data[1], 'Ok!');
        }, (error) => {
            this.notify.showError(error.error[1], 'Erro!');
        })
    }

}
