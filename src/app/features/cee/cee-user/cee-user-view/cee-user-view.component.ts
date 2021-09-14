import { Component, OnInit } from '@angular/core';
import { IAddress, IEmail, IPhone } from 'src/app/interfaces/Contact';
import { IProfile } from 'src/app/interfaces/Profile';
import { ProfileService } from 'src/app/services/profile.service';
import { orderBy } from "lodash";
import { GenderEnum } from 'src/app/interfaces/User';
import { CeeLocalService } from '../../cee.local.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ChatDirectModalComponent } from 'src/app/features/chat/chat-direct-modal/chat-direct-modal.component';
import { IChatUser } from 'src/app/interfaces/IChatUser';
import { IProfileCardOptions } from 'src/app/directives/profile-card/profile-card.component';

interface IProfileCard {
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

  profileCardList: IProfileCard[];
  profileCardOptions: IProfileCardOptions;

  fieldsToFilter: Array<{ field: string, value: string }>;

  constructor(
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
    this.profileService.readFilter({ name: undefined, context: "cee" }).subscribe((data) => {
      console.log("DATA ", data)
      this.profileCardList = this.toViewProfileToProfileCard(data);
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
            userId: u._id,
            group: u.dataAccess?.group || { name: '' },
            userName: u.name,
            profileName: p.name,
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
      }
      profileCardList = profileCardList.concat(profileCards);

    });

    return orderBy(profileCardList, ['userName', 'profileName'], ['asc']);
  }
}
