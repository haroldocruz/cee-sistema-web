import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { IChatUser } from 'src/app/interfaces/IChatUser';
import { IUser } from 'src/app/interfaces/User';
import { ProfileLocalService } from '../profile/profile.local.service';
import { UserLocalService } from '../user/user.local.service';
import { ChatDirectModalComponent } from './chat-direct-modal/chat-direct-modal.component';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.less']
})
export class ChatComponent implements OnInit {

  bsModalRef: BsModalRef;
  ProfileLocalService = ProfileLocalService;

  mockUserList: Array<IChatUser>;

  constructor(
    private userService: UserLocalService,
    private modalService: BsModalService
    ) { }

  ngOnInit(): void {
    this.mockUserListInit();
  }

  openChatDirectModal(user: IChatUser) {
    const initialState = { user, mockUserList: this.mockUserList };
    this.bsModalRef = this.modalService.show(ChatDirectModalComponent, { id: 1, class: 'modal-md', initialState });
    this.bsModalRef.content.closeBtnName = 'Close';
  }

  mockUserListInit(){
    this.mockUserList = [
      {
        name: "Robson Vila Nova",
        avatar: "../../../assets/avatar4.png",
        dateTime: "Hoje"
      },
      {
        name: "Joana D'arc Alves",
        avatar: "../../../assets/avatar2.png",
        dateTime: "27/08/2021"
      },
      {
        name: "Haroldo Emerson",
        avatar: "../../../assets/avatar5.png",
        dateTime: "27/08/2021"
      },
      {
        name: "Robson Vila Nova",
        avatar: "../../../assets/avatar4.png",
        dateTime: "Hoje"
      },
      {
        name: "Joana D'arc Alves",
        avatar: "../../../assets/avatar2.png",
        dateTime: "27/08/2021"
      },
      {
        name: "Haroldo Emerson",
        avatar: "../../../assets/avatar5.png",
        dateTime: "27/08/2021"
      },
      {
        name: "Robson Vila Nova",
        avatar: "../../../assets/avatar4.png",
        dateTime: "Hoje"
      },
      {
        name: "Joana D'arc Alves",
        avatar: "../../../assets/avatar2.png",
        dateTime: "27/08/2021"
      },
      {
        name: "Haroldo Emerson",
        avatar: "../../../assets/avatar5.png",
        dateTime: "27/08/2021"
      },
      {
        name: "Robson Vila Nova",
        avatar: "../../../assets/avatar4.png",
        dateTime: "Hoje"
      },
      {
        name: "Joana D'arc Alves",
        avatar: "../../../assets/avatar2.png",
        dateTime: "27/08/2021"
      },
      {
        name: "Haroldo Emerson",
        avatar: "../../../assets/avatar5.png",
        dateTime: "27/08/2021"
      },
      {
        name: "Robson Vila Nova",
        avatar: "../../../assets/avatar4.png",
        dateTime: "Hoje"
      },
      {
        name: "Joana D'arc Alves",
        avatar: "../../../assets/avatar2.png",
        dateTime: "27/08/2021"
      },
      {
        name: "Haroldo Emerson",
        avatar: "../../../assets/avatar5.png",
        dateTime: "27/08/2021"
      },
      {
        name: "Robson Vila Nova",
        avatar: "../../../assets/avatar4.png",
        dateTime: "Hoje"
      },
      {
        name: "Joana D'arc Alves",
        avatar: "../../../assets/avatar2.png",
        dateTime: "27/08/2021"
      },
      {
        name: "Haroldo Emerson",
        avatar: "../../../assets/avatar5.png",
        dateTime: "27/08/2021"
      },
    ]
  }
}
