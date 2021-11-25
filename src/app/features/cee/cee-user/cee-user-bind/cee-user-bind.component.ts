import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AuthService } from 'src/app/auth/auth.service';
import { IProfileCard, IProfileCardOptions } from 'src/app/directives/profile-card/profile-card.component';
import { IAddress, IEmail, IPhone } from 'src/app/interfaces/Contact';
import { IBindInUser } from 'src/app/interfaces/IBindInUser';
import { IInstitution } from 'src/app/interfaces/Institution';
import { IReqBindMember } from 'src/app/interfaces/IReqBindMember';
import { IProfile, Profile } from 'src/app/interfaces/Profile';
import { GenderEnum, IUser, User } from 'src/app/interfaces/User';
import { EventEmitterService } from 'src/app/services/event-emitter.service';
import { InstitutionService } from 'src/app/services/institution.service';
import { NotificationService } from 'src/app/services/notification.service';
import { UserService } from 'src/app/services/user.service';
import { UtilService } from 'src/app/services/util.service';
import { CeeProfileBindListComponent } from '../../cee-profile/cee-profile-bind-list/cee-profile-bind-list.component';

interface ISchemaCeeUserBindComponent {
  currentBind: any;
}

@Component({
  selector: 'app-cee-user-bind',
  templateUrl: './cee-user-bind.component.html',
  styleUrls: ['./cee-user-bind.component.less']
})
export class CeeUserBindComponent implements OnInit, OnDestroy {


  @Input() public institution: IInstitution;
  @Input() public institutionId: string;
  @Input() public institutionName: string;

  user: IUser;
  profileCard: IProfileCard;
  profileCardOptions: IProfileCardOptions;
  profile: IProfile;

  cpf: string;

  constructor(
    public bsModalRef: BsModalRef,
    public bsModalRefBind: BsModalRef,
    private modalService: BsModalService,
    private userService: UserService,
    private institutionService: InstitutionService,
    public utilService: UtilService,
    private notifyService: NotificationService
  ) { }

  ngOnInit(): void {

    if (!this.institutionId)
      this.institutionId = AuthService.currentBind._institution;
    if (!this.institutionName)
      this.institutionName = AuthService.currentBind.institutionName;

    this.cpf = '';
    this.user = new User();
    this.profile = new Profile();
    this.profileCardOptions = {
      btnAssignProfile: true
    }
  }

  openProfileBindListModal() {
    const initialState = {
      institutionId: this.institutionId,
      context: AuthService.currentBind.context,
      user: this.user
    };
    this.bsModalRefBind = this.modalService.show(CeeProfileBindListComponent, { id: UtilService.getRandom9Digits(), class: 'modal-lg', initialState });
    this.bsModalRefBind.content.closeBtnName = 'Close';

    EventEmitterService.get('cee-profile-bind-selected').subscribe((profile: IProfile) => {
      this.profile = profile;
      this.profileCard.profileId = profile._id;
      this.profileCard.profileName = profile.name;
    });
  }

  bindMember() {
    if (!this.notifyService.isConfirm(`Deseja vincular este usuário ao perfil de ${this.profile.name} em ${this.institution.name}?`))
      return;

    const reqBindMember: IReqBindMember = {
      status: this.profileCard.status,
      context: this.profileCard.context,
      _profile: this.profile?._id || this.profileCard.profileId,
      profileName: this.profile.name || this.profileCard.profileName,
      _institution: <IInstitution & string>this.institution || AuthService.currentBind._institution,
      institutionName: this.institution.name || AuthService.currentBind.institutionName,
      _user: this.profileCard.userId,
      userName: this.profileCard.userName,
    }

    this.institutionService.bindMember(reqBindMember).subscribe((data) => {

      if (data.statusCode >= 200 && data.statusCode < 300) {
        this.notifyService.showSuccess(data.statusMessage, 'OK')
        EventEmitterService.get('is-success').emit(true);
        return;
      }

      //TODO:
      (data.statusCode >= 300 && data.statusCode < 500)
        ? this.notifyService.showWarning(data.statusMessage, 'Algo deu errado')
        : this.notifyService.showError(data.statusMessage, 'ERRO')

    });

    this.bsModalRef.hide();
  }

  ngOnDestroy() {
    EventEmitterService.get('cee-user-bind').emit(this.profile);
  }

  findUser() {
    if (this.cpf === '') {
      this.notifyService.showWarning(`Por favor, insira um CPF válido!`, `Status 400`);
      return;
    }

    let user = {};
    user['cpf'] = this.cpf;
    this.userService.readFilter(user).subscribe((data) => {

      if (data.statusCode) {
        this.profileCard = {} as IProfileCard;
        this.user._id = null;
        this.notifyService.showWarning(data.statusMessage, `Ops! ${data.statusCode}`);
        return;
      }

      this.user = data[0];

      this.toView();

      this.notifyService.showSuccess(`Usuário localizado!`, `Status 200`);
    });
  }


  private toView() {
    const bindList: IBindInUser[] = this.user.dataAccess.bindList;
    const address: IAddress = (this.user.contact?.addressList.length > 0) ? this.user.contact.addressList[0] : null;
    const phone: IPhone = (this.user.contact?.phoneList.length > 0) ? this.user.contact.phoneList[0] : null;
    const email: IEmail = (this.user.contact?.emailList.length > 0) ? this.user.contact.emailList[0] : null;
    this.profileCard = {
      status: false,
      context: '',
      profileId: '',
      profileName: '',
      userId: this.user._id,
      userName: this.user.name,
      institutionId: this.institutionId,
      institutionName: this.institutionName,
      address: this.utilService.addressToString(address),
      phone: (phone != null) ? `${phone.number}` : '',
      email: (email != null) ? `${email.address}` : '',
      avatar: (this.user.gender == GenderEnum.MALE)
        ? "../../../../assets/avatar5.png"
        : (this.user.gender == GenderEnum.FEMALE)
          ? "../../../../assets/avatar2.png"
          : (this.user.gender == GenderEnum.UNINFORMED)
            ? "../../../../assets/avatar.png"
            : "../../../../assets/logo-1257x577-alpha3.png"
    };
  }
}
