import { BsModalRef } from 'ngx-bootstrap/modal';
import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/interfaces/User';
import { UtilService } from 'src/app/services/util.service';
import { UserLocalService } from 'src/app/features/user/user.local.service';

interface IInstitutionView {
  socialReason: string;
  name: string;
  email: string;
  phone: string;
  description: string;
}

@Component({
  selector: 'app-cee-institution-view',
  templateUrl: './cee-institution-view.component.html',
  styleUrls: ['./cee-institution-view.component.less']
})
export class CeeInstitutionViewComponent implements OnInit {

  user: IUser

  constructor(
      public util: UtilService,
      // public bsModalRef: BsModalRef,
      public userService: UserLocalService
  ) { }

  ngOnInit(): void {
  }

  getFirstLastName(fullname: string = this.user.name): string {
      const vector = fullname.split(' ');
      if (vector.length === 1)
          return vector[0];

      const first = vector[0];
      const last = vector[vector.length - 1];
      return first + " " + last;
  }

  getEmailToString(emailList: any): string {
      let emailString = "";
      for (let i = 0; i < emailList.length;) {
          emailString = emailList[i]
          if (++i < emailList.length)
              emailString += ", "
      }

      return emailString;
  }
}
