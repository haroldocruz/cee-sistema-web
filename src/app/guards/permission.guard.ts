import { AuthService } from './../auth/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

interface IRole {
  _id: string;
  status: boolean;
  urn: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class PermissionGuard implements CanActivate {

  routes = {
    "/home": ["Superuser"],
    "/dashboard": ["Superuser"],
    "/user": ["Superuser"],
    "/institution": ["Auxiliar", "Procurador"],
    "/institution/maintained": ["Auxiliar"],
    "/institution/maintainer": ["Auxiliar"],
    "/institution/procurator": ["Auxiliar"],
    "/institution/course": ["Auxiliar"]
  }

  private roles: IRole[] = [
    {
        _id: "1",
        status: true,
        urn: "GET/contact",
        description: "N/A: Contatos: Acessar Rota"
    },
    {
        _id: "2",
        status: false,
        urn: "GET/account/personal",
        description: "N/A: Conta: Acessar Rota"
    },
  ]

  constructor(
    private router: Router
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    // if (this.routes[state.url]?.includes(AuthService.currentProfile.name))
    //   return true;

    if(AuthService.currentBind.profileName) return true;

    this.router.navigate(['/']);

    return false;
  }

}
