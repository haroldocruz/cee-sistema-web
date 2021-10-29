import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { UserPasswordFormModalComponent } from 'src/app/features/user/user-password-form-modal/user-password-form-modal.component';
import { UtilService } from 'src/app/services/util.service';
import { ProfileLocalService } from '../../profile.local.service';

@Component({
  selector: 'app-profile-main-userconfig',
  templateUrl: './profile-main-userconfig.component.html',
  styleUrls: ['./profile-main-userconfig.component.less']
})
export class ProfileMainUserconfigComponent implements OnInit {

  bsModalRef: BsModalRef;

  constructor(
    private modalService: BsModalService
    ) { }

  ngOnInit(): void {
  }

  openUserPasswordFormModal() {
    const initialState = { userId: ProfileLocalService.userId };
    this.bsModalRef = this.modalService.show(UserPasswordFormModalComponent, { id: UtilService.getRandom9Digits(), class: 'modal-sm', initialState });
    this.bsModalRef.content.closeBtnName = 'Close';
  }

}
