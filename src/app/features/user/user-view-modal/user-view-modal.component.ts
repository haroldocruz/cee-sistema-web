import { UtilService } from './../../../services/util.service';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { IUser } from './../../../interfaces/User';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-user-view-modal',
    templateUrl: './user-view-modal.component.html',
    styleUrls: ['./user-view-modal.component.less']
})
export class UserViewModalComponent implements OnInit {

    user: IUser

    constructor(
        public util: UtilService,
        public bsModalRef: BsModalRef,
        public userService: UserService
    ) { }

    ngOnInit(): void {
    }

    getFirstLastName(fullname: string = this.user.name): string {
        const vector = fullname.split(' ');
        if (vector.length === 1)
            return vector[0];

        const first = vector[0];
        const last = vector[vector.length - 1];
        return first + " " + last;
    }

    getEmailToString(emailList: any): string {
        let emailString = "";
        for (let i = 0; i < emailList.length;) {
            emailString = emailList[i]
            if (++i < emailList.length)
                emailString += ", "
        }

        return emailString;
    }
}
