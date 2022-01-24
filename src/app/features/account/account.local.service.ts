import { IProfile, Profile } from '../../interfaces/Profile';
import { Injectable, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser, User } from 'src/app/interfaces/User';
import { AuthService } from 'src/app/auth/auth.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { UserService } from 'src/app/services/user.service';


@Injectable({
  providedIn: 'any'
})
export class AccountLocalService implements OnDestroy {

  private subDestroy$: Subject<boolean> = new Subject();

  static user: IUser;
  static userId: string;
  static profile: IProfile;
  profiles: IProfile[];
  filtro: string;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {
    AccountLocalService.profile = new Profile();
    AccountLocalService.user = new User();
    AccountLocalService.userId = undefined;
    this.index();
  }

  ngOnDestroy(): void {
    this.subDestroy$.next();
    this.subDestroy$.complete();
  }

  index() {
    this.route.queryParams.pipe(takeUntil(this.subDestroy$)).subscribe((params) => {

      let id: string = params['userId'] || AuthService.user._id;

      this.userService.readById(id).pipe(takeUntil(this.subDestroy$)).subscribe((data) => {
        //TODO: refactor
        AccountLocalService.user = data;
        AccountLocalService.userId = data._id;
      });
    });
  }
}
