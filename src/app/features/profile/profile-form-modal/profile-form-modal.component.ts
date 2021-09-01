import { UserLocalService } from '../../user/user.local.service';
import { NotificationService } from './../../../services/notification.service';
import { ProfileLocalService } from '../profile.local.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-profile-form-modal',
    templateUrl: './profile-form-modal.component.html',
    styleUrls: ['./profile-form-modal.component.less']
})
export class ProfileFormModalComponent implements OnInit {

    statusList: string[];
    genderList: string[];

    constructor(
        public profileLocalService: ProfileLocalService,
        public userService: UserLocalService,
        private notify: NotificationService
    ) { }

    ngOnInit(): void {
    }

    create(): void {
        this.profileLocalService.create(ProfileLocalService.profile).subscribe((data) => {
            this.notify.showSuccess(data[1], "Ok!")
            this.profileLocalService.index();
        }, (error) => {
            this.notify.showError(error.error[1], "Ops!")
        });
    }

    update(): void {
        this.profileLocalService.update(ProfileLocalService.profile).subscribe((data) => {
            this.notify.showSuccess(data[1], "Ok!")
            this.profileLocalService.index();
        }, (error) => {
            this.notify.showError(error.error[1], "Ops!")
        });
    }
}
