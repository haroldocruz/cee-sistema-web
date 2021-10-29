import { Component, OnDestroy, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AuthService } from 'src/app/auth/auth.service';
import { IProfileCard, IProfileCardOptions } from 'src/app/directives/profile-card/profile-card.component';
import { IAddress, IEmail, IPhone } from 'src/app/interfaces/Contact';
import { IProfile, Profile } from 'src/app/interfaces/Profile';
import { GenderEnum, IUser, User } from 'src/app/interfaces/User';
import { EventEmitterService } from 'src/app/services/event-emitter.service';
import { NotificationService } from 'src/app/services/notification.service';
import { IBindingProfileUser, ProfileService } from 'src/app/services/profile.service';
import { UserService } from 'src/app/services/user.service';
import { UtilService } from 'src/app/services/util.service';
import { CeeProfileBindListComponent } from '../../cee-profile/cee-profile-bind-list/cee-profile-bind-list.component';

@Component({
  selector: 'app-cee-user-bind',
  templateUrl: './cee-user-bind.component.html',
  styleUrls: ['./cee-user-bind.component.less']
})
export class CeeUserBindComponent implements OnInit, OnDestroy {

  cpf: string;
  profileCard: IProfileCard;
  profileCardOptions: IProfileCardOptions;
  user: IUser;
  profile: IProfile;

  constructor(
    public bsModalRef: BsModalRef,
    public bsModalRefProfile: BsModalRef,
    private modalService: BsModalService,
    private userService: UserService,
    private profileService: ProfileService,
    public utilService: UtilService,
    private notifyService: NotificationService
  ) { }

  ngOnInit(): void {

    EventEmitterService.get('cee-profile-bind-selected').subscribe((profile: IProfile) => {
      this.profile = profile;
      this.profileCard.profileId = profile._id;
      this.profileCard.profileName = profile.name;
    });

    this.cpf = '';
    this.user = new User();
    this.profile = new Profile();
    this.profileCardOptions = {
      btnAssignProfile: true
    }
  }

  openProfileBindListModal() {
    const currentProfile = AuthService.currentProfile;
    const initialState = { currentProfile, user: this.user };
    this.bsModalRefProfile = this.modalService.show(CeeProfileBindListComponent, { id: UtilService.getRandom9Digits(), class: 'modal-lg', initialState });
    this.bsModalRefProfile.content.closeBtnName = 'Close';
  }

  bindingProfileUser() {
    if (!this.notifyService.isConfirm(`Deseja vincular este usuário ao perfil de ${this.profile.name}?`))
      return;

    const profileUser: IBindingProfileUser = {
      profileId: this.profileCard.profileId,
      userId: this.profileCard.userId
    }

    this.profileService.bindingProfileUser(profileUser).subscribe((data) => {

      (data.statusCode >= 200 && data.statusCode < 300)
        ? this.notifyService.showSuccess(data.statusMessage, 'OK')
        : (data.statusCode >= 300 && data.statusCode < 500)
          ? this.notifyService.showWarning(data.statusMessage, 'Algo deu errado')
          : this.notifyService.showError(data.statusMessage, 'ERRO')

    });

    this.bsModalRef.hide();
  }

  ngOnDestroy() {
    EventEmitterService.get('cee-user-bind').emit(this.profile);
  }

  getUser() {
    if (this.cpf === '') {
      this.notifyService.showWarning(`Por favor, insira um CPF válido!`, `Status 400`);
      return;
    }

    let user = {};
    user['cpf'] = this.cpf;
    this.userService.readFilter(user).subscribe((data) => {

      if (data.statusCode) {
        console.log("DATA1" + JSON.stringify(data)) //!APAGAR
        this.profileCard = {} as IProfileCard;
        this.user._id = null;
        this.notifyService.showWarning(data.statusMessage, `Ops! ${data.statusCode}`);
      }
      else {
        console.log("DATA2" + JSON.stringify(data)) //!APAGAR
        this.user = data[0];

        const address: IAddress = (data[0].contact?.addressList.length > 0) ? data[0].contact.addressList[0] : null;
        const phone: IPhone = (data[0].contact?.phoneList.length > 0) ? data[0].contact.phoneList[0] : null;
        const email: IEmail = (data[0].contact?.emailList.length > 0) ? data[0].contact.emailList[0] : null;
        this.profileCard = {
          profileId: data[0]._currentProfile?._id || '',
          userId: data[0]._id,
          group: data[0].dataAccess?._profileDefault?.group || { name: '' },
          userName: data[0].name,
          profileName: data[0]._currentProfile?.name || '',
          address: (address != null) ? `${address.place}, ${address.number}, ${address.district}, ${address.city}, ${address.state}, ${address.zipcode}` : '',
          phone: (phone != null) ? `${phone.number}` : '',
          email: (email != null) ? `${email.address}` : '',
          avatar: (data[0].gender == GenderEnum.MALE)
            ? "../../../../assets/avatar5.png"
            : (data[0].gender == GenderEnum.FEMALE)
              ? "../../../../assets/avatar2.png"
              : (data[0].gender == GenderEnum.UNINFORMED)
                ? "../../../../assets/avatar.png"
                : "../../../../assets/logo-1257x577-alpha3.png"
        }

        this.notifyService.showSuccess(`Usuário localizado!`, `Status 200`);
      }
    });
  }

}
