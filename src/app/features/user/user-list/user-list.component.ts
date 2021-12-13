import { UserProfileEditModalComponent } from './../user-profile-edit-modal/user-profile-edit-modal.component';
import { UserViewModalComponent } from './../user-view-modal/user-view-modal.component';
import { UserFormComponent } from '../user-form/user-form.component';

import { NotificationService } from './../../../services/notification.service';
import _cloneDeep from "lodash/cloneDeep";

import { IUser } from './../../../interfaces/User';
import { Component, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { UtilService } from 'src/app/services/util.service';
import { EventEmitterService } from 'src/app/services/event-emitter.service';
import { UserService } from 'src/app/services/user.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.less']
})
export class UserListComponent implements OnInit, OnDestroy {

    bsModalRef: BsModalRef;
    bsModalRef2: BsModalRef;

    private componentDestroyed$: Subject<boolean> = new Subject();

    public isLoading: boolean;
    userList: IUser[];
    filtro: string;


    constructor(
        public userService: UserService,
        private bsModalService: BsModalService,
        public utilService: UtilService
    ) { }

    ngOnDestroy(): void {
        this.componentDestroyed$.next(true);
        this.componentDestroyed$.complete();
    }

    ngOnInit(): void {
        this.userList = [];
        this.isLoading = true;
        this.index();
        this.isLoading = false;

        EventEmitterService.get('is-success')
            .pipe(takeUntil(this.componentDestroyed$))
            .subscribe((isSuccess) => {
                if (!isSuccess) return;
                this.index();
            });
    }

    index(): void {
        this.userService.read()
        .pipe(takeUntil(this.componentDestroyed$))
        .subscribe((data) => {
            console.log("data", data);

            if (data.statusMessage) {
                UtilService.notifying.showError(data.statusMessage, `${data.statusCode}`);
                return;
            }
            this.toView(data);
        });
    }

    public toView(userList: IUser[]) {
        this.userList = userList;
    }

    delete(id: string): void {
        if (UtilService.isConfirm("Quer realmente remover este usuário?")) {
            UtilService.default(this.userService.delete(id));
            EventEmitterService.get('is-success').emit(true);
        }
    }

    changeStatus(user: IUser) {
        if (UtilService.isConfirm("Deseja mudar o status?")) {
            const userUpd = {
                _id: user._id,
                status: !user.status
            }
            UtilService.default(this.userService.update(userUpd))
        }
    }

    openUserViewModal(user: IUser) {
        const initialState = { user };
        this.bsModalRef = this.bsModalService.show(UserViewModalComponent, { id: 1, class: 'modal-lg', initialState });
        // this.bsModalRef.content.closeBtnName = 'Close';
    }

    openUserProfileEditModal(user: IUser) {
        const initialState = { user };
        this.bsModalRef = this.bsModalService.show(UserProfileEditModalComponent, { id: 1, class: 'modal-lg', initialState });
        // this.bsModalRef.content.closeBtnName = 'Close';
    }

    openUserFormModal(user: IUser) {
        const initialState = { user };
        this.bsModalRef = this.bsModalService.show(UserFormComponent, { id: 1, class: 'modal-lg', initialState });
        // this.bsModalRef.content.closeBtnName = 'Close';
    }

    openModal(template: TemplateRef<any>) {
        this.bsModalRef = this.bsModalService.show(template, { id: 1, class: 'modal-lg' });
    }

    openModal2(template: TemplateRef<any>) {
        this.bsModalRef2 = this.bsModalService.show(template, { id: 2, class: 'second' });
    }
    closeFirstModal() {
        if (!this.bsModalRef) {
            return;
        }

        this.bsModalRef.hide();
        this.bsModalRef = null;
    }
    closeModal(modalId?: number) {
        this.bsModalService.hide(modalId);
    }

}
