import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { IUser } from 'src/app/interfaces/User';
import { UserFormComponent } from '../../user/user-form/user-form.component';
import { AccountLocalService } from '../account.local.service';

@Component({
  selector: 'app-account-image',
  templateUrl: './account-image.component.html',
  styleUrls: ['./account-image.component.less']
})
export class AccountImageComponent implements OnInit, AfterContentChecked {

  bsModalRef: BsModalRef;

  public accountLocalService = AccountLocalService;

  user: IUser;

  constructor(
    private bsModalService: BsModalService
  ) { }

  ngOnInit(): void {
  }

  ngAfterContentChecked(){
    this.user = AccountLocalService.user
  }


  openUserFormModal(user: IUser) {
    const initialState = { user };
    this.bsModalRef = this.bsModalService.show(UserFormComponent, { id: 1, class: 'modal-lg', initialState });
    this.bsModalRef.content.closeBtnName = 'Close';
  }

}
