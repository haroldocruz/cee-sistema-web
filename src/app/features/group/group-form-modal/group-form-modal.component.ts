import { NotificationService } from '../../../shared/services/notification.service';
import { GroupService } from './../group.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-group-form-modal',
    templateUrl: './group-form-modal.component.html',
    styleUrls: ['./group-form-modal.component.less']
})
export class GroupFormModalComponent implements OnInit {

    constructor(
        public groupService: GroupService,
        private notify: NotificationService
    ) { }

    ngOnInit(): void {
    }

    create(): void {
        this.groupService.create(this.groupService.group).subscribe((data) => {
            this.notify.showSuccess(data[1], "Ok!")
            this.groupService.index();
        }, (error) => {
            this.notify.showError(error.error[1], "Ops!")
        });
    }

    update(): void {
        this.groupService.update(this.groupService.group).subscribe((data) => {
            this.notify.showSuccess(data[1], "Ok!")
            this.groupService.index();
        }, (error) => {
            this.notify.showError(error.error[1], "Ops!")
        });
    }
}
