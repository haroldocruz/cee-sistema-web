import { AuthService } from '../auth.service';
import { Component, OnInit } from '@angular/core';
import { IBindInUser } from 'src/app/interfaces/IBindInUser';

@Component({
  selector: 'app-auth-bind-list',
  templateUrl: './auth-bind-list.component.html',
  styleUrls: ['./auth-bind-list.component.less']
})
export class AuthBindListComponent implements OnInit {

  bindList: IBindInUser[];
  authService = AuthService

  constructor() { }

  ngOnInit(): void {
    // this.bindList = AuthService.user.dataAccess?.bindList;
  }

  selectProfile(profile: IBindInUser){
    AuthService.currentBind = profile;
  }

}
