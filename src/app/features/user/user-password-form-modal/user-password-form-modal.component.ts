import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { UserService } from 'src/app/services/user.service';
import { UtilService } from 'src/app/services/util.service';

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
    private userService: UserService
  ) { }

  ngOnInit(): void {
  }

  update(): void {
    if (this.newPassword !== this.newPasswordCheck) {
      UtilService.notifying.showWarning('Senhas não conferem', 'Ops!');
      return;
    }

    if (!UtilService.isConfirm()) return;

    this.userChangePassword = {
      _id: this.userId,
      "dataAccess.password": this.newPassword
    };

    UtilService.default(this.userService.update(this.userChangePassword));
    if (this.bsModalRef)
      this.bsModalRef.hide();
  }

}
