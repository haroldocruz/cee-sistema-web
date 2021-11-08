import { IStatusMessage } from './../interfaces/IStatusMessage';
import { NotificationService } from './../services/notification.service';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { IUserDataLogin, UserLocalService } from '../features/user/user.local.service';
import { Component, OnInit } from '@angular/core';
import { IUser } from '../interfaces/User';
import { ContextEnum } from '../interfaces/enumerations/ContextEnum';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.less']
})
export class AuthComponent implements OnInit {

  public mockUserList = [];
  public mockUserSelected: { name: string } & IUserDataLogin;

  public userdataLogin: { name: string } & IUserDataLogin;
  // public username: string = "12345678909"
  // public password: string = "12345678909"
  public remember: boolean = false

  constructor(
    private authService: AuthService,
    private router: Router,
    private notifyService: NotificationService,
    private userService: UserLocalService
  ) { }

  ngOnInit(): void {
    this.userdataLogin = { name: "", username: "", password: "" }
    this.mockUserindex();
    // this.mockUserSelected = this.mockUserList[0]
  }

  mockUserindex() {
    this.mockUserList = [
      { name: "Super Usuário", username: "12345678909", password: "12345678909" },
      { name: "Administrador", username: "01234567890", password: "01234567890" }
    ]
    // this.userService.read().subscribe((data) => {
    //   console.log(">>>"+data)
    //   this.mockUserList = data
    // })
  }

  mockChangeUserSelected(event) {
    this.userdataLogin = this.mockUserSelected;
    // this.userdataLogin = event;
    console.log(JSON.stringify(this.mockUserSelected))
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

  onPass(data){
    this.notifyService.showInfo(`${data.name}`, `Seja bem vindo!`);
    AuthService.user = data;
    AuthService.currentProfile = data.loginInfo._profileLogin;
    (this.remember) ? localStorage.setItem("user", JSON.stringify(data)) : sessionStorage.setItem("user", JSON.stringify(data));
    this.redirectHandle();
  }

  onFail(data){
    console.log(data)
    this.notifyService.showWarning(data.statusMessage, `Ops! ${data.statusCode}`);
  }

  redirectHandle() {
    console.log("AuthService.currentProfile?: "+ JSON.stringify(AuthService.currentProfile))
    switch (AuthService.currentProfile?.context) {
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
        AuthService.currentProfile = { name: "Registrado" };
    }
  }

}
