import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { IChatUser } from 'src/app/interfaces/IChatUser';
import { ChatDirectModalComponent } from './chat-direct-modal/chat-direct-modal.component';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.less']
})
export class ChatComponent implements OnInit {

  bsModalRef: BsModalRef;

  mockUserList: Array<IChatUser>;

  constructor(
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
        image: "../../../assets/avatar4.png",
        dateTime: "Hoje"
      },
      {
        name: "Joana D'arc Alves",
        image: "../../../assets/avatar2.png",
        dateTime: "27/08/2021"
      },
      {
        name: "Haroldo Emerson",
        image: "../../../assets/avatar5.png",
        dateTime: "27/08/2021"
      },
      {
        name: "Robson Vila Nova",
        image: "../../../assets/avatar4.png",
        dateTime: "Hoje"
      },
      {
        name: "Joana D'arc Alves",
        image: "../../../assets/avatar2.png",
        dateTime: "27/08/2021"
      },
      {
        name: "Haroldo Emerson",
        image: "../../../assets/avatar5.png",
        dateTime: "27/08/2021"
      },
      {
        name: "Robson Vila Nova",
        image: "../../../assets/avatar4.png",
        dateTime: "Hoje"
      },
      {
        name: "Joana D'arc Alves",
        image: "../../../assets/avatar2.png",
        dateTime: "27/08/2021"
      },
      {
        name: "Haroldo Emerson",
        image: "../../../assets/avatar5.png",
        dateTime: "27/08/2021"
      },
      {
        name: "Robson Vila Nova",
        image: "../../../assets/avatar4.png",
        dateTime: "Hoje"
      },
      {
        name: "Joana D'arc Alves",
        image: "../../../assets/avatar2.png",
        dateTime: "27/08/2021"
      },
      {
        name: "Haroldo Emerson",
        image: "../../../assets/avatar5.png",
        dateTime: "27/08/2021"
      },
      {
        name: "Robson Vila Nova",
        image: "../../../assets/avatar4.png",
        dateTime: "Hoje"
      },
      {
        name: "Joana D'arc Alves",
        image: "../../../assets/avatar2.png",
        dateTime: "27/08/2021"
      },
      {
        name: "Haroldo Emerson",
        image: "../../../assets/avatar5.png",
        dateTime: "27/08/2021"
      },
      {
        name: "Robson Vila Nova",
        image: "../../../assets/avatar4.png",
        dateTime: "Hoje"
      },
      {
        name: "Joana D'arc Alves",
        image: "../../../assets/avatar2.png",
        dateTime: "27/08/2021"
      },
      {
        name: "Haroldo Emerson",
        image: "../../../assets/avatar5.png",
        dateTime: "27/08/2021"
      },
    ]
  }
}
