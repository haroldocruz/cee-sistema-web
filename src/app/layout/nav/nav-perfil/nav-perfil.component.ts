import { IStatusMessage } from './../../../interfaces/IStatusMessage';
import { NotificationService } from './../../../services/notification.service';
import { AuthService } from './../../../auth/auth.service';
import { UserLocalService } from '../../../features/user/user.local.service';
import { ProfileService } from './../../../services/profile.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AuthBindListComponent } from 'src/app/auth/auth-bind-list/auth-bind-list.component';
import { UtilService } from 'src/app/services/util.service';

@Component({
    selector: 'app-nav-perfil',
    templateUrl: './nav-perfil.component.html',
    styleUrls: ['./nav-perfil.component.less']
})
export class NavPerfilComponent implements OnInit {

    private bsModalRef: BsModalRef;

    AuthService = AuthService;

    profileIndex: number = 0;
    firstName = /(.*?) .*/
    lastName = /.* (\w*)/

    constructor(
        private router: Router,
        private bsModalService: BsModalService,
        public authService: AuthService,
        public profileService: ProfileService,
        public userService: UserLocalService,
        private notify: NotificationService
    ) { }

    ngOnInit(): void {
    }

    openAuthBindListModal() {
      const initialState = {};
      this.bsModalRef = this.bsModalService.show(AuthBindListComponent, { id: UtilService.getRandom9Digits(), class: 'modal-lg', initialState });
    }

    logOut(): void {
        if(!UtilService.isConfirm("Deseja realmente sair?")) return;

        this.authService.logout(<string>AuthService.user._id).subscribe((data: IStatusMessage) => {
            this.clear();
            this.redirect();
            this.notify.showSuccess(`${data.statusMessage}!`, `${data.statusCode}`);
        }, (error) => {
            this.clear();
            this.redirect();
            this.notify.showError(`Erro não tratado!`, `Ops!`);
        });
    }

    private redirect(){
        this.router.navigate(['/auth/login']);
    }

    private clear() {
        sessionStorage.removeItem("user");
        localStorage.removeItem("user");
        AuthService.init();
    }
}
