import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { NotificationService } from 'src/app/services/notification.service';
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
    public userService: UserLocalService,
    private notifyService: NotificationService
  ) { }

  ngOnInit(): void {
  }

  update(): void {
    if (this.newPassword !== this.newPasswordCheck) {
      this.notifyService.showWarning('Senhas não conferem', 'Ops!');
      return;
    }

    if (!this.userService.isConfirm()) return;

    this.userChangePassword = {
      _id: this.userId,
      "dataAccess.password": this.newPassword
    };

    this.userService.default(this.userService.update(this.userChangePassword));
    this.bsModalRef.hide();
  }

}
