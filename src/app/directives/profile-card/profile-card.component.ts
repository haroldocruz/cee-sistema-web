import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ChatDirectModalComponent } from 'src/app/features/chat/chat-direct-modal/chat-direct-modal.component';
import { IChatUser } from 'src/app/interfaces/IChatUser';
import { UtilService } from 'src/app/services/util.service';

export interface IProfileCard {
  profileId?: string,
  userId?: string,
  "group": { "name": string },
  "userName": string,
  "profileName": string,
  address: string,
  phone: string,
  email: string,
  avatar: string
}

export interface IProfileCardOptions {
  btnChat?: boolean;
  btnDisable?: boolean;
  btnToView?: boolean;
  btnAssignProfile?: boolean;
}

@Component({
  selector: 'sd-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.less']
})
export class ProfileCardComponent implements OnInit {
  
  public bsModalRef: BsModalRef;
  public utilService: UtilService;

  @Input() profileCard: IProfileCard;
  @Input() profileCardOptions: IProfileCardOptions;

  constructor(
    public modalService: BsModalService
    ) {
    this.profileCard = {
      profileId: null,
      userId: null,
      userName: '',
      profileName: '',
      avatar: '/assets/avatar.png',
      phone: '',
      email: '',
      address: '',
      group: { name: '' },
    }
    this.profileCardOptions = {
      btnChat: false,
      btnDisable: false,
      btnToView: false,
      btnAssignProfile: false
    }
  }

  ngOnInit(): void {
  }

}
