import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { IUser } from 'src/app/interfaces/User';
import { UserFormModalComponent } from '../../user/user-form-modal/user-form-modal.component';
import { UserService } from '../../user/user.service';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile-card-image',
  templateUrl: './profile-card-image.component.html',
  styleUrls: ['./profile-card-image.component.less']
})
export class ProfileCardImageComponent implements OnInit {

  bsModalRef: BsModalRef;

  ProfileService = ProfileService;
  user

  constructor(
    public profileService: ProfileService,
    private userService: UserService,
    private modalService: BsModalService
  ) { }

  ngOnInit(): void {
    this.user = ProfileService.user
    console.log(this.user)
  }

  openUserFormModal(user: IUser) {
    const initialState = { user };
    this.bsModalRef = this.modalService.show(UserFormModalComponent, { id: 1, class: 'modal-lg', initialState });
    this.bsModalRef.content.closeBtnName = 'Close';
  }

}
