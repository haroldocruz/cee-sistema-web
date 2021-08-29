import { AuthService } from './../auth.service';
import { IUser, User } from './../../interfaces/User';
import { UserService } from './../../features/user/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-list-modal',
  templateUrl: './auth-list-modal.component.html',
  styleUrls: ['./auth-list-modal.component.less']
})
export class AuthListModalComponent implements OnInit {

  userList: IUser[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.read().subscribe((users)=>{
      this.userList = users;
    });
  }

  login(user: IUser): void {
    AuthService.user = this.userService.users.find(  e => e._id == user._id) || new User();
    AuthService.currentProfile = AuthService.user.dataAccess.group
  }

}
