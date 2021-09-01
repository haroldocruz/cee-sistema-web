import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { IDataAccess, IUser, User } from 'src/app/interfaces/User';
import { ProfileLocalService } from '../../profile/profile.local.service';
import { UserLocalService } from '../user.local.service';

interface IUserChangePassword {
  _id: string;
  "dataAccess.password": string;
}

@Component({
  selector: 'app-user-password-form-modal',
  templateUrl: './user-password-form-modal.component.html',
  styleUrls: ['./user-password-form-modal.component.less']
})
export class UserPasswordFormModalComponent implements OnInit {

  userId: string;

  isDataAccess: boolean;
  userChangePassword: IUserChangePassword;
  newPassword: string;
  newPasswordCheck: string;
  actualPassword: string;

  constructor(
    public bsModalRef: BsModalRef,
    private modalService: BsModalService,
    public userService: UserLocalService
  ) { }

  ngOnInit(): void {
  }

  update(): void {
    if (!this.userService.isConfirm()) return;

    this.userChangePassword = {
      _id: this.userId,
      "dataAccess.password": this.newPassword
    };

    this.userService.default(this.userService.update(this.userChangePassword));
    this.bsModalRef.hide();
  }

}
