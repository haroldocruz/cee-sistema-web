import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { IProfile } from 'src/app/interfaces/Profile';
import { IUser, User } from 'src/app/interfaces/User';
import { EventEmitterService } from 'src/app/services/event-emitter.service';
import { NotificationService } from 'src/app/services/notification.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-cee-profile-bind-list',
  templateUrl: './cee-profile-bind-list.component.html',
  styleUrls: ['./cee-profile-bind-list.component.less']
})
export class CeeProfileBindListComponent implements OnInit {

  profileList: IProfile[];
  currentProfile: IProfile;
  user: IUser;

  constructor(
    public bsModalRef: BsModalRef,
    private profileService: ProfileService,
    private notifyService: NotificationService
  ) { }

  ngOnInit(): void {
    const filter = { context: this.currentProfile.context, group: this.currentProfile.group, scope: this.currentProfile.scope };
    this.profileService.readFilter(filter).subscribe(async (profileList: IProfile[]) => {
      // this.profileList = profileList
      this.profileList = await profileList.filter(this.isNotProfile, this);
    });
  }

  isNotProfile(profile: IProfile): boolean {
    return !profile._userList.some((user) => {
      return (user._id === this.user._id)
    });
  }

  selected(item: any): void {

    if (!this.notifyService.isConfirm("Deseja realmente usar este perfil?"))
      return;

    EventEmitterService.get('cee-profile-bind-selected').emit(item);

    this.bsModalRef.hide();
  }

}
