import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { IUploadComponentOptions, UploadComponent } from 'src/app/directives/upload/upload.component';
import { IUser, User } from 'src/app/interfaces/User';
import { EventEmitterService } from 'src/app/services/event-emitter.service';
import { UserFormComponent } from '../../user/user-form/user-form.component';
import { AccountLocalService } from '../account.local.service';

interface IAccountImageComponentTemplate {
  name: string;
  imagePath: string;
  accessCount: string;
  activityCount: string;
}

@Component({
  selector: 'app-account-image',
  templateUrl: './account-image.component.html',
  styleUrls: ['./account-image.component.less']
})
export class AccountImageComponent implements OnInit {

  bsModalRef: BsModalRef;

  public account: IAccountImageComponentTemplate;

  constructor(
    private bsModalService: BsModalService
  ) { }

  ngOnInit(): void {
    this.toView(AccountLocalService.user);

    EventEmitterService.get('AccountLocalService.user').subscribe(() => {
      this.toView(AccountLocalService.user);
    })
  }

  openUserFormModal() {
    const initialState = { user: AccountLocalService.user };
    this.bsModalRef = this.bsModalService.show(UserFormComponent, { id: 1, class: 'modal-lg', initialState });
    this.bsModalRef.content.closeBtnName = 'Close';
  }

  openUploadImageModal() {
    const uploadComponentOptions: IUploadComponentOptions = {
      isAvatar: true,
      isFile: true,
      accept: ['image/*'],
      isMultiple: false
    };
    const initialState = { options: uploadComponentOptions, user: AccountLocalService.user };
    this.bsModalRef = this.bsModalService.show(UploadComponent, { id: 1, class: 'modal-lg', initialState });
  }

  private toView(user: IUser = new User()) {
    this.account = {
      name: user.name,
      imagePath: user.image?.path,
      accessCount: user.loginInfo?.accessCount?.toString(),
      activityCount: '',
    }
  }

}
