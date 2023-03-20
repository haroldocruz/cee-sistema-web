import { UserService } from 'src/app/shared/services/user.service';
import { IStatusMessage } from './../interfaces/IStatusMessage';
import { NotificationService } from '../shared/services/notification.service';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';
import { IUser } from '../interfaces/User';
import { ContextEnum } from '../interfaces/enumerations/ContextEnum';
import { IUserDataLogin } from '../shared/services/user.service';
import { IBindInUser } from 'src/app/interfaces/IBindInUser';
import { IQueryConfig } from 'src/app/interfaces/IQueryConfig';
import { IProfile } from 'src/app/interfaces/Profile';

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
        private mockUserService: UserService,
        private router: Router,
        private authService: AuthService,
        private notifyService: NotificationService
    ) { }

    ngOnInit(): void {
        this.userdataLogin = { username: '', password: '' };
        this.mockUserIndex()
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

        this.getProfileDetails(AuthService.currentBind);
    }

    onFail(data: IStatusMessage) {
        console.log(data)
        this.notifyService.showWarning(data.statusMessage, `Ops! ${data.statusCode}`);
    }

    getProfileDetails(currentBind: IBindInUser) {
        const queryConfig: IQueryConfig = { populateList: [{ path: "_roleList", select: [] }] };

        this.authService.profile(currentBind._profile, queryConfig).subscribe(observer => {
            if (observer.statusCode)
                //TODO: implemnetar se o servidor não retornar o perfil
                return;

            AuthService.currentBind._profile = <IProfile & string><unknown>observer;
        })
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

    mockUserIndex() {
        // this.mockUserService.read().subscribe((data: IUser[]) => {

        //   data.map((e)=>{
        //     console.log("e", e);

        //     this.mockUserList.push({ mockName: e.socialName, password: e.dataAccess.password, username: e.cpf+'' });
        //   })
        // })
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
