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
export class ProfileLocalService {

  static user: IUser;
  static userId: string;
  static profile: IProfile;
  profiles: IProfile[];
  filtro: string;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private userLocalService: UserLocalService
  ) {
    ProfileLocalService.profile = new Profile();
    ProfileLocalService.user = new User();
    ProfileLocalService.userId = undefined;
    this.index();
  }

  index() {
    this.route.queryParams.subscribe((params) => {
      
      let id: string = params['userId'] || AuthService.user._id;
      console.log(id) //!APAGAR
      // this.userLocalService.readById(id).subscribe((data) => {
      //   ProfileLocalService.user = data;
      //   ProfileLocalService.userId = data._id;
      // });
    });
  }
}
