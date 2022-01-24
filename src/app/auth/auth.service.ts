import { Profile } from 'src/app/interfaces/Profile';
import { IUser, User } from './../interfaces/User';
import { IProfile } from './../interfaces/Profile';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { ENV } from 'src/environments/environment';
import { IRoute } from '../interfaces/IRoute';
import { IBindInUser } from '../interfaces/IBindInUser';

interface IUserDataLogin {
  username?: string;
  password: string;
}

export interface IHttpHeadersOptions {
  'authorization'?: string;
  'Content-Type'?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // static currentProfile: IProfile;
  static user: IUser;
  static currentBind: IBindInUser;
  static leftTimer: number; //TODO: implementar no backend
  static routeList: IRoute[];

  baseUrl = `${ENV.api.url}/auth`;

  constructor(private http: HttpClient) {
    AuthService.init()
  }

  static init() {
    const user: string = sessionStorage.getItem("user") || localStorage.getItem("user");
    AuthService.user = (user) ? JSON.parse(user) : new User();
    AuthService.currentBind = AuthService.user?.loginInfo?.currentBind;
    // AuthService.currentProfile = AuthService.user?.loginInfo?._profileLogin || new Profile();
  }

  static headers() {
    return new HttpHeaders({
      //TODO
      // 'Accept': 'application/json',
      // 'Access-Control-Allow-Origin': '*',
      // 'Content-Type': 'multipart/form-data',
      'authorization': AuthService.user?.loginInfo?.token || '',
      'Content-Type': 'application/json'
    });
  }

  // static headers(headers?: IHttpHeadersOptions) {
  //   return new HttpHeaders({
  //     //TODO
  //     'authorization': headers?.authorization || AuthService.user?.loginInfo?.token || '',
  //     'Content-Type': headers?.['Content-Type'] || 'application/json'
  //   });
  // }

  login(userDataLogin: IUserDataLogin): Observable<any> {
    const url = `${this.baseUrl}/login`;
    return this.http.post<IUser>(url, userDataLogin, { headers: AuthService.headers() })
  }

  //TODO: implementar no backend
  revalidate(userDataLogin: IUserDataLogin): Observable<any> {
    const url = `${this.baseUrl}/revalidate`;
    return this.http.post<IUser>(url, userDataLogin, { headers: AuthService.headers() })
  }

  logout(id: string): Observable<any> {
    // const headers = { 'authorization': AuthService.user?.loginInfo?.token }
    const url = `${this.baseUrl}/logout/${id}`;
    return this.http.post<any>(url, {}, { headers: AuthService.headers() })
  }

  // logon(userDataLogin: IUserDataLogin): Observable<IUser> {
  //   return //TODO implement
  // }

  // logoff(id: string): Observable<IUser> {
  //   return //TODO implement
  // }

  profile(id: string): void {
    const url = `${this.baseUrl}/${id}`;
    this.http.get<IUser>(url).subscribe((user) => {
      AuthService.user = user;
    });
  }

}
