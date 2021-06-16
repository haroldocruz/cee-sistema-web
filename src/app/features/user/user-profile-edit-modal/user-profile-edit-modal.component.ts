import { BsModalRef } from 'ngx-bootstrap/modal';
import { cloneDeep } from 'lodash';
import { IPhone } from './../../../interfaces/Contact';
import { User, IUser } from './../../../interfaces/User';
import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-user-profile-edit-modal',
    templateUrl: './user-profile-edit-modal.component.html',
    styleUrls: ['./user-profile-edit-modal.component.less']
})
export class UserProfileEditModalComponent implements OnInit {

  @Input() user: IUser;
  phoneListRef: IPhone[];
  phone: IPhone;
  phoneList: IPhone[];

  constructor(
      public bsModalRef: BsModalRef
  ) { }

  ngOnInit(): void {
      this.phone = {}
  }

  insertPhone(){
      this.phoneList.push(this.phone);
      this.phone = {};
  }

  editPhone(phone: IPhone){
      this.phone = cloneDeep(phone);
      this.removePhone(phone);
  }

  removePhone(phone: IPhone){
      const idx = this.phoneList.indexOf(phone);
      this.phoneList.splice(idx, 1);
  }

  confirm(){
      this.phoneListRef.splice(0, this.phoneListRef.length)
      this.phoneListRef.push(...this.phoneList);
      this.bsModalRef.hide();
  }
}
