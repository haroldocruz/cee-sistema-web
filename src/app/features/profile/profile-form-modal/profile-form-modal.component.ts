import { UserService } from './../../user/user.service';
import { NotificationService } from './../../../services/notification.service';
import { ProfileService } from './../profile.service';
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
        public profileService: ProfileService,
        public userService: UserService,
        private notify: NotificationService
    ) { }

    ngOnInit(): void {
    }

    create(): void {
        this.profileService.create(ProfileService.profile).subscribe((data) => {
            this.notify.showSuccess(data[1], "Ok!")
            this.profileService.index();
        }, (error) => {
            this.notify.showError(error.error[1], "Ops!")
        });
    }

    update(): void {
        this.profileService.update(ProfileService.profile).subscribe((data) => {
            this.notify.showSuccess(data[1], "Ok!")
            this.profileService.index();
        }, (error) => {
            this.notify.showError(error.error[1], "Ops!")
        });
    }
}
