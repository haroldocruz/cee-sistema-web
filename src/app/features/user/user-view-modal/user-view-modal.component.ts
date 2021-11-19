import { UtilService } from './../../../services/util.service';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { IUser } from './../../../interfaces/User';
import { UserLocalService } from '../user.local.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-user-view-modal',
    templateUrl: './user-view-modal.component.html',
    styleUrls: ['./user-view-modal.component.less']
})
export class UserViewModalComponent implements OnInit {

    @Input() user: IUser

    constructor(
        public util: UtilService,
        public bsModalRef: BsModalRef,
        public userService: UserLocalService
    ) { }

    ngOnInit(): void {
    }
}
