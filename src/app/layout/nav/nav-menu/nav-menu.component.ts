import { AuthService } from './../../../auth/auth.service';
import { UserService } from './../../../features/user/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.less']
})
export class NavMenuComponent implements OnInit {

  AuthService = AuthService;

  constructor(public userService: UserService) { }

  ngOnInit(): void {
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
