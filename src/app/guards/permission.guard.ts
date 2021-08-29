import { AuthService } from './../auth/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

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

  constructor(
    private router: Router
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    // if (this.routes[state.url]?.includes(AuthService.currentProfile.name))
    //   return true;

    if(AuthService.currentProfile.name) return true;

    this.router.navigate(['/']);

    return false;
  }

}
