import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { UserPasswordFormModalComponent } from 'src/app/features/user/user-password-form-modal/user-password-form-modal.component';
import { UtilService } from 'src/app/shared/services/util.service';
import { AccountLocalService } from '../../account.local.service';

@Component({
    selector: 'app-account-main-settings',
    templateUrl: './account-main-settings.component.html',
    styleUrls: ['./account-main-settings.component.less']
})
export class AccountMainSettingsComponent implements OnInit {

    bsModalRef: BsModalRef;

    constructor(
        private modalService: BsModalService
    ) { }

    ngOnInit(): void {
    }

    openUserPasswordFormModal() {
        const initialState = { userId: AccountLocalService.userId };
        this.bsModalRef = this.modalService.show(UserPasswordFormModalComponent, { id: UtilService.getRandom9Digits(), class: 'modal-sm', initialState });
        this.bsModalRef.content.closeBtnName = 'Close';
    }

}
