import { IStatusMessage } from './../interfaces/IStatusMessage';
import { NotificationService } from './../services/notification.service';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { IUserDataLogin } from './../features/user/user.service';
import { Component, OnInit } from '@angular/core';
import { IUser } from '../interfaces/User';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.less']
})
export class AuthComponent implements OnInit {

    public dataAccess: IUserDataLogin;
    public username: string = "12345678909"
    public password: string = "12345678909"
    public remember: boolean = false

    constructor(private authService: AuthService, private router: Router, private notifyService: NotificationService) { }

    ngOnInit(): void {
    }

    submit() {
        this.dataAccess = { username: this.username, password: this.password }
        this.authService.login(this.dataAccess).subscribe((data: IUser & IStatusMessage) => {
            if (data._id) {
                AuthService.user = data;
                AuthService.currentProfile = data.loginInfo.profileLogin;
                (this.remember) ? sessionStorage.setItem("user", JSON.stringify(data)) : localStorage.setItem("user", JSON.stringify(data));
                this.redirectHandle();
            }
            else {
                console.log(data)
                this.notifyService.showWarning(data.statusMessage, `Ops! ${data.statusCode}`);
            }
        });
    }

    redirectHandle() {
        switch (AuthService.currentProfile?.context) {
            case "cee":
                this.router.navigate(['/cee/home']);
                break;
            case "institution":
                this.router.navigate(['/institution/home']);
                break;
            default:
                this.router.navigate(['/home']);
                AuthService.currentProfile = { name: "Registrado" };
        }
    }

}
