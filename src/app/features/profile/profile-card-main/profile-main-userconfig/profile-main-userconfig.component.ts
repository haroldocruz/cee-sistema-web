import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { UserPasswordFormModalComponent } from 'src/app/features/user/user-password-form-modal/user-password-form-modal.component';
import { UserService } from 'src/app/features/user/user.service';
import { IUser } from 'src/app/interfaces/User';
import { ProfileService } from '../../profile.service';

@Component({
  selector: 'app-profile-main-userconfig',
  templateUrl: './profile-main-userconfig.component.html',
  styleUrls: ['./profile-main-userconfig.component.less']
})
export class ProfileMainUserconfigComponent implements OnInit {

  bsModalRef: BsModalRef;
  ProfileLocalService = ProfileService;

  constructor(
    private userService: UserService,
    private modalService: BsModalService
    ) { }

  ngOnInit(): void {
  }

  openUserPasswordFormModal(user: IUser) {
    const initialState = { user };
    this.bsModalRef = this.modalService.show(UserPasswordFormModalComponent, { id: 1, class: 'modal-sm', initialState });
    this.bsModalRef.content.closeBtnName = 'Close';
  }

}
