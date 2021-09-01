import { NotificationService } from './../../../services/notification.service';
import { ProfileLocalService } from '../profile.local.service';
import { Component, OnInit } from '@angular/core';
import { IProfile, Profile } from 'src/app/interfaces/Profile';

@Component({
    selector: 'app-profile-list',
    templateUrl: './profile-list.component.html',
    styleUrls: ['./profile-list.component.less']
})
export class ProfileListComponent implements OnInit {

    constructor(public profileLocalService: ProfileLocalService, private notify: NotificationService) { }

    ngOnInit(): void {
        this.index()
    }

    index(): void {
        this.profileLocalService.index();
    }

    edit(profile: IProfile | null) {
        ProfileLocalService.profile = (profile) ? profile : new Profile();
    }

    delete(id): void {
        this.profileLocalService.delete(id).subscribe((data) => {
            this.profileLocalService.index();
            this.notify.showSuccess(data[1], 'Ok!');
        }, (error) => {
            this.notify.showError(error.error[1], 'Erro!');
        })
    }

}
