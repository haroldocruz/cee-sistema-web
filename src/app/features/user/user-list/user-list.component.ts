import { UserProfileEditModalComponent } from './../user-profile-edit-modal/user-profile-edit-modal.component';
import { IEmail } from './../../../interfaces/Contact';
import { UserViewModalComponent } from './../user-view-modal/user-view-modal.component';
import { UserFormModalComponent } from './../user-form-modal/user-form-modal.component';

import { NotificationService } from './../../../services/notification.service';
import _cloneDeep from "lodash/cloneDeep";

import { IUser } from './../../../interfaces/User';
import { UserService } from './../user.service';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.less']
})
export class UserListComponent implements OnInit {

    // userList: IUser[]
    // filtro: string;

    bsModalRef: BsModalRef;
    bsModalRef2: BsModalRef;

    constructor(
        public userService: UserService,
        private modalService: BsModalService,
        private notify: NotificationService
    ) { }

    ngOnInit(): void { this.index() }

    index(): void {
        this.userService.index();
    }

    delete(id:string): void {
        if (this.userService.isConfirm("Quer realmente remover este usuário?"))
            this.userService.default(this.userService.delete(id));
    }

    changeStatus(user:IUser) {
        if (this.userService.isConfirm("Deseja mudar o status?")) {
            const userUpd = {
                _id: user._id,
                status: !user.status
            }
            this.userService.default(this.userService.update(userUpd))
        }
    }

    getFirstLastName(fullname: string = this.userService.user?.name): string {
        const vector = fullname.split(' ');
        if (vector.length === 1)
            return vector[0];

        const first = vector[0];
        const last = vector[vector.length - 1];
        return first + " " + last;
    }

    emailListToString(emailList: [IEmail]): string {
        let aux = ''
        let result = ''
        emailList.forEach((e, i, l) => {

            aux = `${e.address}${(e.description) ? '(' + e.description + ')' : ''}`
            result += (result.length > 0) ? ', ' + aux : aux;
        })
        return result;
    }

    openUserViewModal(user: IUser) {
        const initialState = { user };
        this.bsModalRef = this.modalService.show(UserViewModalComponent, { id: 1, class: 'modal-lg', initialState });
        // this.bsModalRef.content.closeBtnName = 'Close';
    }

    openUserProfileEditModal(user: IUser) {
        const initialState = { user };
        this.bsModalRef = this.modalService.show(UserProfileEditModalComponent, { id: 1, class: 'modal-lg', initialState });
        // this.bsModalRef.content.closeBtnName = 'Close';
    }

    openUserFormModal(user: IUser) {
        const initialState = { user };
        this.bsModalRef = this.modalService.show(UserFormModalComponent, { id: 1, class: 'modal-lg', initialState });
        // this.bsModalRef.content.closeBtnName = 'Close';
    }

    openModal(template: TemplateRef<any>) {
        this.bsModalRef = this.modalService.show(template, { id: 1, class: 'modal-lg' });
    }

    openModal2(template: TemplateRef<any>) {
        this.bsModalRef2 = this.modalService.show(template, { id: 2, class: 'second' });
    }
    closeFirstModal() {
        if (!this.bsModalRef) {
            return;
        }

        this.bsModalRef.hide();
        this.bsModalRef = null;
    }
    closeModal(modalId?: number) {
        this.modalService.hide(modalId);
    }

}
