import { IStatusMessage } from './../../../interfaces/IStatusMessage';
import { NotificationService } from './../../../services/notification.service';
import { AuthService } from './../../../auth/auth.service';
import { UserService } from './../../../features/user/user.service';
import { ProfileService } from './../../../services/profile.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/User';
import { Router } from '@angular/router';

@Component({
    selector: 'app-nav-perfil',
    templateUrl: './nav-perfil.component.html',
    styleUrls: ['./nav-perfil.component.less']
})
export class NavPerfilComponent implements OnInit {

    AuthService = AuthService;

    profileIndex: number = 0;
    firstName = /(.*?) .*/
    lastName = /.* (\w*)/

    constructor(
        public authService: AuthService,
        public profileService: ProfileService,
        public userService: UserService,
        private notify: NotificationService,
        private router: Router
    ) { }

    ngOnInit(): void {
    }

    logOut(): void {
        this.authService.logout(<string>AuthService.user._id).subscribe((data: IStatusMessage) => {
            sessionStorage.removeItem("user");
            localStorage.removeItem("user");
            AuthService.init();
            this.router.navigate(['/']);
            this.notify.showSuccess(`${data.statusMessage}!`, `${data.statusCode}`);
        }, (error) => {
            console.log(error)
            sessionStorage.removeItem("user");
            localStorage.removeItem("user");
            AuthService.init();
            this.router.navigate(['/']);
            this.notify.showError(`${error.error.statusMessage}!`, `Ops! Erro ${error.error.statusCode}`);
        });
    }

}
