import { AfterViewChecked, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/auth.service';
import { ProfileLocalService } from 'src/app/features/profile/profile.local.service';
import { IUser } from 'src/app/interfaces/User';
import { UtilService } from 'src/app/services/util.service';
import { AccountLocalService } from '../../account.local.service';

@Component({
  selector: 'app-account-main-personal',
  templateUrl: './account-main-personal.component.html',
  styleUrls: ['./account-main-personal.component.less']
})
export class AccountMainPersonalComponent implements OnInit {

  public accountLocalService = AccountLocalService

  constructor(
    public utilService: UtilService
  ) {}

  ngOnInit(): void {
    //TODO: Method not implemented.
  }
}
