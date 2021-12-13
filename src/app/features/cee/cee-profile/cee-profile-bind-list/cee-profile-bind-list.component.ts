import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/auth.service';
import { IBindInUser } from 'src/app/interfaces/IBindInUser';
import { IInstitution } from 'src/app/interfaces/Institution';
import { IQueryConfig } from 'src/app/interfaces/IQueryConfig';
import { IStatusMessage } from 'src/app/interfaces/IStatusMessage';
import { IProfile } from 'src/app/interfaces/Profile';
import { IUser } from 'src/app/interfaces/User';
import { EventEmitterService } from 'src/app/services/event-emitter.service';
import { InstitutionService } from 'src/app/services/institution.service';
import { NotificationService } from 'src/app/services/notification.service';
import { ProfileService } from 'src/app/services/profile.service';
import { UtilService } from 'src/app/services/util.service';

interface ISchemaCeeProfileBindListComponent {
  context?: string;
  institutionId: string;
  user: IUser;
  profileList?: IProfile[];
}

@Component({
  selector: 'app-cee-profile-bind-list',
  templateUrl: './cee-profile-bind-list.component.html',
  styleUrls: ['./cee-profile-bind-list.component.less']
})
export class CeeProfileBindListComponent implements OnInit, OnDestroy {

  @Input() context: string;
  @Input() institutionId: string;
  @Input() user: IUser;

  profileList: IProfile[];
  subDestroy$ = new Subject();

  constructor(
    public bsModalRef: BsModalRef,
    private profileService: ProfileService,
    private notifyService: NotificationService
  ) { }

  ngOnDestroy(): void {
    this.subDestroy$.next();
    this.subDestroy$.complete();
  }

  ngOnInit(): void {
    if (!this.context) this.context = AuthService.currentBind.context;
    if (!this.institutionId) this.institutionId = AuthService.currentBind._institution;
    this.index();
  }

  index() {
    // const queryConfig: IQueryConfig = {
    //   populateList: [{ path: '', select: [] }]
    // };
    const profile: IProfile = { context: this.context };
    this.profileService.readFilter(profile/*, queryConfig*/)
    .pipe(takeUntil(this.subDestroy$))
    .subscribe(async (data: IProfile[] & IStatusMessage) => {
      console.log("data", data);
      // this.profileList = profileList
      if (data.statusMessage) {
        UtilService.notifying.showError(data.statusMessage, `${data.statusCode}`)
        return;
      }

      this.profileList = await data.filter(this.isNotProfile, this);
    });
  }

  isNotProfile(profile: IProfile): boolean {
    return !this.user.dataAccess.bindList.some((bind) => {
      return (bind._profile === profile._id && bind._institution === this.institutionId)
    });
  }

  selected(profileSelected: IProfile): void {

    if (!this.notifyService.isConfirm("Deseja realmente usar este perfil?"))
      return;

    EventEmitterService.get('CeeProfileBindListComponent.selected').emit(profileSelected);

    if (this.bsModalRef)
      this.bsModalRef.hide();
  }

}
