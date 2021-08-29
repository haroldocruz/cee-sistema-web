import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-password-form-modal',
  templateUrl: './user-password-form-modal.component.html',
  styleUrls: ['./user-password-form-modal.component.less']
})
export class UserPasswordFormModalComponent implements OnInit {

  isDataAccess: boolean;
  user
  password: string;
  passwordCheck: string;

  constructor(
    public bsModalRef: BsModalRef,
    private modalService: BsModalService,
    public userService: UserService
  ) { }

  ngOnInit(): void {
  }

  update(): void {
    if (!this.userService.isConfirm()) return;
    if (!this.isDataAccess) delete this.user.dataAccess;

    this.userService.default(this.userService.update(this.user));
    this.bsModalRef.hide();
  }

}
