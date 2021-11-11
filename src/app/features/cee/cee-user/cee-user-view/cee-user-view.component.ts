import { Component, OnInit } from '@angular/core';
import { IAddress, IEmail, IPhone } from 'src/app/interfaces/Contact';
import { IProfile } from 'src/app/interfaces/Profile';
import { IBindingProfileUser, ProfileService } from 'src/app/services/profile.service';
import { orderBy } from "lodash";
import { GenderEnum } from 'src/app/interfaces/User';
import { CeeLocalService } from '../../cee.local.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ChatDirectModalComponent } from 'src/app/features/chat/chat-direct-modal/chat-direct-modal.component';
import { IChatUser } from 'src/app/interfaces/IChatUser';
import { IProfileCardOptions } from 'src/app/directives/profile-card/profile-card.component';
import { UtilService } from 'src/app/services/util.service';
import { AuthService } from 'src/app/auth/auth.service';
import { NotificationService } from 'src/app/services/notification.service';

interface IProfileCard {
  profileId: string,
  userId: string,
  "group": { "name": string },
  "userName": string,
  "profileName": string,
  address: string,
  phone: string,
  email: string,
  avatar: string
}

@Component({
  selector: 'app-cee-user-view',
  templateUrl: './cee-user-view.component.html',
  styleUrls: ['./cee-user-view.component.less']
})
export class CeeUserViewComponent implements OnInit {
  
  public bsModalRef: BsModalRef

  profileCardList: IProfileCard[];
  profileCardOptions: IProfileCardOptions;

  fieldsToFilter: Array<{ field: string, value: string }>;

  constructor(
    public notifyService: NotificationService,
    public modalService: BsModalService,
    public profileService: ProfileService,
    public ceeLocalService: CeeLocalService
  ) { }

  ngOnInit(): void {
    this.userIndex();
    this.fieldsToFilter = [
      { field: 'userName', value: this.ceeLocalService.filter },
      { field: 'profileName', value: this.ceeLocalService.filter }
    ];
    this.profileCardOptions = { btnChat: true, btnDisable: true, btnToView: true }
  }

  userIndex() {
    console.log(AuthService.currentProfile.context)
    this.profileService.readFilter({ name: undefined, context: AuthService.currentProfile.context }).subscribe((data) => {

      this.profileCardList = this.toViewProfileToProfileCard(data);
    });
  }

  openChatDirectModal(user: IProfileCard) {
    const user2: IChatUser = { name: user.userName, avatar: user.avatar, dateTime: "28/08/2021" }
    const initialState = { user: user2  };
    this.bsModalRef = this.modalService.show(ChatDirectModalComponent, { id: UtilService.getRandom9Digits(), class: 'modal-md', initialState });
    this.bsModalRef.content.closeBtnName = 'Close';
  }

  unbindingProfileUser(profileCard: IProfileCard) {
    if (!UtilService.isConfirm(`Deseja desvincular ${profileCard.userName} do perfil de ${profileCard.profileName}?`))
      return;

    const profileUser: IBindingProfileUser = {
      profileId: profileCard.profileId,
      userId: profileCard.userId
    }

    this.profileService.unBindingProfileUser(profileUser).subscribe((data) => {

      (data.statusCode >= 200 && data.statusCode < 300)
        ? this.notifyService.showSuccess(data.statusMessage, 'OK')
        : (data.statusCode >= 300 && data.statusCode < 500)
          ? this.notifyService.showWarning(data.statusMessage, 'Algo deu errado')
          : this.notifyService.showError(data.statusMessage, 'ERRO')

    });
  }

  toViewProfileToProfileCard(profileList: IProfile[]): IProfileCard[] {

    let profileCardList: IProfileCard[] = [];

    profileList.forEach(p => {

      let profileCards: IProfileCard[];

      if (p._userList?.length > 0) {
        profileCards = p._userList.map((u) => {
          const address: IAddress = (u.contact?.addressList.length > 0) ? u.contact.addressList[0] : null;
          const phone: IPhone = (u.contact?.phoneList.length > 0) ? u.contact.phoneList[0] : null;
          const email: IEmail = (u.contact?.emailList.length > 0) ? u.contact.emailList[0] : null;
          const profileCard = {
            profileId: p._id,
            profileName: p.name,
            group: u.dataAccess?._profileDefault?.group || { name: '' },
            userId: u._id,
            userName: u.name,
            address: (address != null) ? `${address.place}, ${address.number}, ${address.district}, ${address.city}, ${address.state}, ${address.zipcode}` : '',
            phone: (phone != null) ? `${phone.number}` : '',
            email: (email != null) ? `${email.address}` : '',
            avatar: (u.gender == GenderEnum.MALE) ? "../../../../assets/avatar5.png"
              : (u.gender == GenderEnum.FEMALE) ? "../../../../assets/avatar2.png"
                : (u.gender == GenderEnum.UNINFORMED) ? "../../../../assets/avatar.png"
                  : "../../../../assets/logo-1257x577-alpha3.png"
          }
          return profileCard;
        });
        profileCardList = profileCardList.concat(profileCards);
      }

    });

    return orderBy(profileCardList, ['userName', 'profileName'], ['asc']);
  }
}
