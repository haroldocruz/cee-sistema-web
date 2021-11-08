import { AuthService } from './../../../auth/auth.service';
import { UserLocalService } from '../../../features/user/user.local.service';
import { Component, OnInit } from '@angular/core';
import { ContextEnum } from 'src/app/interfaces/enumerations/ContextEnum';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.less']
})
export class NavMenuComponent implements OnInit {

  AuthService = AuthService;
  contextEnum

  constructor(public userService: UserLocalService) { }

  ngOnInit(): void {
    
  this.contextEnum = ContextEnum;
  }

  // isPermitted(rep: string): boolean {

  //   return (rep === "cee")
  //     ? ["Técnico", "Administrador", "Gerente"].includes(AuthService.currentProfile.name)
  //     : (rep === "institution")
  //       ? ["Auxiliar", "Procurador", "Representante Legal"].includes(AuthService.currentProfile.name)
  //       : (rep === "commission")
  //         ? ["Membro"].includes(AuthService.currentProfile.name)
  //         : (rep === "manager")
  //           ? ["Administrador", "Gerente"].includes(AuthService.currentProfile.name)
  //         : (rep === "anonimous")
  //           ? ["Anônimo"].includes(AuthService.currentProfile.name)
  //           : false
  // }

  isPermitted(rep: string): boolean {

    const profileList = {
      "Super Usuário": ["/cee", "/institution", "/manager"],
      "Técnico": ["/cee"],
      "Administrador": ["/cee", "/manager"],
      "Gerente": ["/cee"],
      "Auxiliar": ["/institution"],
      "Procurador": ["/institution"],
      "Representante Legal": ["/institution"],
      "Membro": ["/commission"],
      "Anônimo": [""]
    }

    return profileList[AuthService.currentProfile.name].includes(rep);

  }

}
