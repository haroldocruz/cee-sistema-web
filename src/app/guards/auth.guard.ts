import { AuthService } from './../auth/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IRole } from '../interfaces/Profile';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    function findSomeUrn(e: IRole, i, l){
      return e.urn == state.url;
    }

    
    //verificar se o usuário está logado
    if(AuthService.user?._id)
    //verificar se as regras do perfil dão permissão para acesso a rota
    // if(AuthService.currentBind._profile._roleList.some(findSomeUrn))
      return true;

    // this.router.navigate(['/'])

    return false;
  }
}
