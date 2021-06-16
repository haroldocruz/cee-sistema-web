import { Profile } from 'src/app/interfaces/Profile';
import { IUser, User } from './../interfaces/User';
import { IProfile } from './../interfaces/Profile';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { ENV } from 'src/environments/environment';

interface IUserDataLogin {
  username?: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  static currentProfile: IProfile;
  static user: IUser;

  baseUrl = `${ENV.api.url}/auth`;

  constructor(private http: HttpClient) {
    AuthService.init()
  }

  static init() {
    AuthService.user = (sessionStorage.getItem("user")) ? JSON.parse(<string>sessionStorage.getItem("user")) : new User();
    AuthService.currentProfile = AuthService.user?.loginInfo?.profileLogin || new Profile();
  }

  headers(){
      return {
        //TODO
        'authorization': AuthService.user?.loginInfo?.token || '',
        'Content-Type': 'application/json'
      };
  }

  login(userDataLogin: IUserDataLogin): Observable<any> {
    const url = `${this.baseUrl}/login`;
    return this.http.post<IUser>(url, userDataLogin, { headers: this.headers() })
  }

  logout(id: string): Observable<any> {
    // const headers = { 'authorization': AuthService.user?.loginInfo?.token }
    const url = `${this.baseUrl}/logout/${id}`;
    return this.http.post<any>(url, {}, { headers: this.headers() })
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
