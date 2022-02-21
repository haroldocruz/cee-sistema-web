import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AuthService } from 'src/app/auth/auth.service';
import { IProfileCardTemplate, IProfileCardOptions } from 'src/app/directives/profile-card/profile-card.component';
import { IAddress, IEmail, IPhone } from 'src/app/interfaces/Contact';
import { IInstitution } from 'src/app/interfaces/Institution';
import { IReqBindMember } from 'src/app/interfaces/IReqBindMember';
import { IProfile, Profile } from 'src/app/interfaces/Profile';
import { IUser, User } from 'src/app/interfaces/User';
import { EventEmitterService } from 'src/app/services/event-emitter.service';
import { InstitutionService } from 'src/app/services/institution.service';
import { NotificationService } from 'src/app/services/notification.service';
import { UserService } from 'src/app/services/user.service';
import { UtilService } from 'src/app/services/util.service';
import { IQueryConfig } from 'src/app/interfaces/IQueryConfig';
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

  private subDestroy$ = new Subject();

  @Input() public institution: IInstitution;
  @Input() public institutionId: string;
  @Input() public institutionName: string;
  @Input() public institutionContext: string;

  user: IUser;
  profileCard: IProfileCardTemplate;
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
  ) {
    this.user = new User();
   }

  ngOnDestroy() {
    this.subDestroy$.next();
    this.subDestroy$.complete();
  }

  ngOnInit(): void {

    if (!this.institutionId)
      this.institutionId = this.institution?._id || AuthService.currentBind._institution;
    if (!this.institutionName)
      this.institutionName = this.institution?.name || AuthService.currentBind.institutionName;
    if (!this.institutionContext)
      this.institutionContext = this.institution?.context || AuthService.currentBind.context;

    this.cpf = '';
    this.user = new User();
    this.profile = new Profile();
    this.profileCardOptions = {
      btnAssignProfile: true
    }
  }

  private index(){

  }

  openProfileBindListModal() {
    const initialState = {
      institutionId: this.institutionId,
      context: this.institution?.context || AuthService.currentBind.context,
      user: this.user
    };
    this.bsModalRefBind = this.modalService.show(CeeProfileBindListComponent, { id: UtilService.getRandom9Digits(), class: 'modal-lg', initialState });
    this.bsModalRefBind.content.closeBtnName = 'Close';

    EventEmitterService.get('CeeProfileBindListComponent.selected')
    .pipe(takeUntil(this.subDestroy$))
    .subscribe((profile: IProfile) => {
      this.profile = profile;
      this.profileCard.profileId = profile._id;
      this.profileCard.profileName = profile.name;
    });
  }

  bindMember() {
    if (!this.notifyService.isConfirm(`Deseja vincular este usuário ao perfil de ${this.profileCard.profileName} em ${this.profileCard.institutionName}?`))
      return;

    const reqBindMember: IReqBindMember = {
      status: this.profileCard.status,
      context: this.profileCard.context,
      _profile: this.profileCard.profileId,
      profileName: this.profileCard.profileName,
      _institution: this.profileCard.institutionId,
      institutionName: this.profileCard.institutionName,
      _user: this.profileCard.userId,
      userName: this.profileCard.userName,
    }

    this.institutionService.bindMember(reqBindMember)
    .pipe(takeUntil(this.subDestroy$))
    .subscribe((data) => {

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

  findUser() {
    if (this.cpf === '') {
      this.notifyService.showWarning(`Por favor, insira um CPF válido!`, `Status 400`);
      return;
    }

    const queryConfig: IQueryConfig = {
      populateList: []
    }

    let user = {};
    user['cpf'] = this.cpf;
    this.userService.filterOne(user, queryConfig)
    .pipe(takeUntil(this.subDestroy$))
    .subscribe((data) => {

      if (data.statusCode) {
        this.profileCard = null;
        this.user = new User();
        this.notifyService.showWarning(data.statusMessage, `Ops! ${data.statusCode}`);
        return;
      }

      this.user = data;

      this.toView();

      this.notifyService.showSuccess(`Usuário localizado!`, `Status 200`);
    });
  }


  private toView() {
    const address: IAddress = (this.user.contact?.addressList.length > 0) ? this.user.contact.addressList[0] : null;
    const phone: IPhone = (this.user.contact?.phoneList.length > 0) ? this.user.contact.phoneList[0] : null;
    const email: IEmail = (this.user.contact?.emailList.length > 0) ? this.user.contact.emailList[0] : null;
    this.profileCard = {
      status: false,
      context: this.institutionContext,
      profileId: this.profile._id,
      profileName: this.profile.name,
      userId: this.user._id,
      userName: this.user.name,
      institutionId: this.institutionId,
      institutionName: this.institutionName,
      address: this.utilService.addressToString(address),
      phone: (phone != null) ? `${phone.number}` : null,
      email: (email != null) ? `${email.address}` : null,
      image: (this.user.image?.path) ? 'http://localhost:3000/uploads/' + this.user.image?.path : UtilService.getAvatarByGender(this.user.gender)
    };
  }
}
