import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { UserPasswordFormModalComponent } from 'src/app/features/user/user-password-form-modal/user-password-form-modal.component';
import { UserLocalService } from 'src/app/features/user/user.local.service';
import { IUser } from 'src/app/interfaces/User';
import { ProfileLocalService } from '../../profile.local.service';

@Component({
  selector: 'app-profile-main-userconfig',
  templateUrl: './profile-main-userconfig.component.html',
  styleUrls: ['./profile-main-userconfig.component.less']
})
export class ProfileMainUserconfigComponent implements OnInit {

  bsModalRef: BsModalRef;
  profileLocalService = ProfileLocalService;

  constructor(
    private userService: UserLocalService,
    private modalService: BsModalService
    ) { }

  ngOnInit(): void {
  }

  openUserPasswordFormModal(userId: string) {
    const initialState = { userId };
    this.bsModalRef = this.modalService.show(UserPasswordFormModalComponent, { id: 1, class: 'modal-sm', initialState });
    this.bsModalRef.content.closeBtnName = 'Close';
  }

}
