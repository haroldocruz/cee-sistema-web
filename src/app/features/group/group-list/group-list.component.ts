import { NotificationService } from '../../../shared/services/notification.service';
import { GroupService } from './../group.service';
import { Component, OnInit } from '@angular/core';
import { IGroup, Group } from 'src/app/interfaces/Group';

@Component({
    selector: 'app-group-list',
    templateUrl: './group-list.component.html',
    styleUrls: ['./group-list.component.less']
})
export class GroupListComponent implements OnInit {

    constructor(public groupService: GroupService, private notify: NotificationService) { }

    ngOnInit(): void {
        this.index()
    }

    index(): void {
        this.groupService.index();
    }

    edit(group: IGroup | null) {
        this.groupService.group = (group) ? group : new Group();
    }

    delete(id): void {
        this.groupService.delete(id).subscribe((data) => {
            this.groupService.index();
            this.notify.showSuccess(data[1], 'Ok!');
        }, (error) => {
            this.notify.showError(error.error[1], 'Erro!');
        })
    }

}
