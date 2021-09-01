import { IProfile, Profile } from '../../interfaces/Profile';
import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { ENV } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';
import { IUser, User } from 'src/app/interfaces/User';
import { UserLocalService } from '../user/user.local.service';
import { AuthService } from 'src/app/auth/auth.service';


@Injectable({
  providedIn: 'any'
})
export class ProfileLocalService implements OnDestroy {

  static user: IUser;
  static userId: string;
  static profile: IProfile;
  profiles: IProfile[];
  filtro: string;

  baseUrl = `${ENV.api.url}/profile`;

  private headers = new HttpHeaders({
    //TODO
    // 'Authorization': localStorage.getItem('token'),
    // 'Content-Type': 'application/json'
  });

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private userService: UserLocalService
  ) {
    ProfileLocalService.profile = new Profile();
    ProfileLocalService.user = new User();
    ProfileLocalService.userId = undefined;
    this.index();
  }

  index() {
    console.log("CHAMOU")
    this.route.queryParams.subscribe((params) => {

      let id: string = params['userId'] || AuthService.user._id;
      this.userService.readById(id).subscribe((data) => {
        ProfileLocalService.user = data;
        ProfileLocalService.userId = data._id;
      });
    });
  }

  edit(profile: IProfile | null) {
    ProfileLocalService.profile = (profile) ? profile : new Profile();
  }

  create(profile: IProfile): Observable<IProfile> {
    return this.http.post<IProfile>(this.baseUrl, profile);
  }

  read(): Observable<IProfile[]> {
    return this.http.get<IProfile[]>(this.baseUrl, { headers: this.headers });
  }

  readById(id: string): Observable<IProfile> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<IProfile>(url);
  }

  update(profile: IProfile): Observable<IProfile> {
    const url = `${this.baseUrl}/${profile._id}`
    return this.http.put<IProfile>(url, profile);
  }

  delete(id: string): Observable<IProfile> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<IProfile>(url);
  }

  ngOnDestroy(){
    console.log("ProfileLocalService destruído!")
  }

}
