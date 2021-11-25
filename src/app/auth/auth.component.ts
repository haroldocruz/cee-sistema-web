import { IStatusMessage } from './../interfaces/IStatusMessage';
import { NotificationService } from './../services/notification.service';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';
import { IUser } from '../interfaces/User';
import { ContextEnum } from '../interfaces/enumerations/ContextEnum';
import { IUserDataLogin } from '../services/user.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.less']
})
export class AuthComponent implements OnInit {

  public mockUserList: ({ mockName: string } & IUserDataLogin)[];
  public mockUserSelected: { mockName: string } & IUserDataLogin;

  public userdataLogin: IUserDataLogin;
  public isRemember: boolean = true;

  constructor(
    private router: Router,
    private authService: AuthService,
    private notifyService: NotificationService
  ) { }

  ngOnInit(): void {
    this.userdataLogin = { username: '', password: '' };
    this.mockUserindex();
  }

  submit() {
    // this.userdataLogin = { username: this.username, password: this.password }
    this.authService.login(this.userdataLogin).subscribe((data: IUser & IStatusMessage) => {
      if (data._id) {
        this.onPass(data);
      }
      else {
        this.onFail(data);
      }
    });
  }

  onPass(user: IUser) {
    this.notifyService.showInfo(`${user.name}`, `Seja bem vindo!`);
    AuthService.user = user;
    AuthService.currentBind = user.loginInfo.currentBind;
    (this.isRemember) ? localStorage.setItem("user", JSON.stringify(user)) : sessionStorage.setItem("user", JSON.stringify(user));
    this.redirectHandle();
  }

  onFail(data: IStatusMessage) {
    console.log(data)
    this.notifyService.showWarning(data.statusMessage, `Ops! ${data.statusCode}`);
  }

  redirectHandle() {
    switch (AuthService.currentBind?.context) {
      case ContextEnum.SYSTEM:
        this.router.navigate(['/cee/home']);
        break;
      case ContextEnum.CEE:
        this.router.navigate(['/cee/home']);
        break;
      case ContextEnum.IE_UE:
        this.router.navigate(['/institution/home']);
        break;
      default:
        this.router.navigate(['/home']);
      // AuthService.currentBind = { profileName: "Registrado" };
    }
  }

  mockUserindex() {
    this.mockUserList = [
      { mockName: "Super Usuário", username: "12345678909", password: "12345678909" },
      { mockName: "Administrador", username: "01234567890", password: "01234567890" }
    ]
    this.mockUserSelected = this.mockUserList[1];
    this.userdataLogin = this.mockUserSelected;
  }

  mockChangeUserSelected(event) {
    this.userdataLogin = this.mockUserSelected;
    // this.userdataLogin = event;
    console.log(JSON.stringify(this.mockUserSelected))
  }
}
