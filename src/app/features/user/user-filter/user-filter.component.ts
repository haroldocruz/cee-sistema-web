import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { IUser, User } from 'src/app/interfaces/User';
import { EventEmitterService } from 'src/app/services/event-emitter.service';
import { UtilService } from 'src/app/services/util.service';
import { UserFormComponent } from '../user-form/user-form.component';
import { UserLocalService } from '../user.local.service';

@Component({
  selector: 'app-user-filter',
  templateUrl: './user-filter.component.html',
  styleUrls: ['./user-filter.component.less']
})
export class UserFilterComponent implements OnInit {

  public filtro: string;
  bsModalRef: BsModalRef;

  searchTimeout;

  constructor(
    private bsModalService: BsModalService,
  ) { }

  ngOnInit(): void {
    UtilService.Title.setTitle('SIGAS | User');
  }

  openUserFormModal(user: IUser | null = null) {
    const initialState = { user: (user) ? user : new User() };
    this.bsModalRef = this.bsModalService.show(UserFormComponent, { id: 1, class: 'modal-lg', initialState });
    // this.bsModalRef.content.closeBtnName = 'Close';
  }

  changeSearch(search: string): void {
    clearTimeout(this.searchTimeout);
    this.searchTimeout = setTimeout(() => {
      EventEmitterService.get('UserFilterComponent.search').emit(search);
    }, 600);
  }

}
