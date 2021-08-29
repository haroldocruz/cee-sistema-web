import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { IChatUser } from 'src/app/interfaces/IChatUser';
import { ProfileService } from '../../profile/profile.service';
import { UserService } from '../../user/user.service';
import { ChatLocalService } from '../chat-service.service';

@Component({
  selector: 'app-chat-direct-modal',
  templateUrl: './chat-direct-modal.component.html',
  styleUrls: ['./chat-direct-modal.component.less']
})
export class ChatDirectModalComponent implements OnInit {

  user: IChatUser;
  mockUserList: IChatUser[];

  constructor(
    public bsModalRef: BsModalRef,
    private modalService: BsModalService,
    public chatLocalService: ChatLocalService
  ) { }

  ngOnInit(): void {
  }

}
