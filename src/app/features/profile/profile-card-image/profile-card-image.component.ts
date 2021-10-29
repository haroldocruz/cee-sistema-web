import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { IUser } from 'src/app/interfaces/User';
import { UserFormModalComponent } from '../../user/user-form-modal/user-form-modal.component';
import { UserLocalService } from '../../user/user.local.service';
import { ProfileLocalService } from '../profile.local.service';

@Component({
  selector: 'app-profile-card-image',
  templateUrl: './profile-card-image.component.html',
  styleUrls: ['./profile-card-image.component.less']
})
export class ProfileCardImageComponent implements OnInit, AfterContentChecked {

  bsModalRef: BsModalRef;

  public profileLocalService = ProfileLocalService;

  user: IUser;

  constructor(
    private modalService: BsModalService
  ) { }

  ngOnInit(): void {
  }

  ngAfterContentChecked(){
    this.user = ProfileLocalService.user
  }


  openUserFormModal(user: IUser) {
    const initialState = { user };
    this.bsModalRef = this.modalService.show(UserFormModalComponent, { id: 1, class: 'modal-lg', initialState });
    this.bsModalRef.content.closeBtnName = 'Close';
  }

}
