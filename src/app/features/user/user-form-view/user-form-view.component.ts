import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-user-form-view',
    templateUrl: './user-form-view.component.html',
    styleUrls: ['./user-form-view.component.less']
})
export class UserFormViewComponent implements OnInit {

    constructor(
        public userService: UserService
    ) { }

    ngOnInit(): void {
    }

    getFirstLastName(fullname: string = this.userService.user?.name): string {
        const vector = fullname.split(' ');
        if (vector.length === 1)
            return vector[0];

        const first = vector[0];
        const last = vector[vector.length - 1];
        return first + " " + last;
    }

}
