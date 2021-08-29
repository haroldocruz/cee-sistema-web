import { AuthService } from './../auth.service';
import { IProfile } from './../../interfaces/Profile';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-profile-modal',
  templateUrl: './auth-profile-modal.component.html',
  styleUrls: ['./auth-profile-modal.component.less']
})
export class AuthProfileModalComponent implements OnInit {

  profileList: IProfile[];
  AuthService = AuthService

  constructor() { }

  ngOnInit(): void {
    this.profileList = AuthService.user.dataAccess?.groupList;
  }

  selectProfile(profile: IProfile){
    AuthService.currentProfile = profile;
  }

}
