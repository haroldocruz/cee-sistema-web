import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { UserFormModalComponent } from './user-form-modal/user-form-modal.component';
import { UserLocalService } from './user.local.service';
import { IUser, User } from './../../interfaces/User';
import { Component, OnInit } from '@angular/core';
import { Observable, fromEvent } from "rxjs";
import { debounceTime, distinctUntilChanged, map, filter, switchMap } from "rxjs/operators";
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.less']
})
export class UserComponent implements OnInit {

    // public filterInputId = new FormControl();
    public filtro: string;
    bsModalRef: BsModalRef;

    constructor(
        private titleService: Title,
        public userService: UserLocalService,
        private modalService: BsModalService,
    ) { }

    ngOnInit(): void {
        this.titleService.setTitle('SIGAS | User')

        this.typeahead(document.getElementById('search-box')).subscribe(data => {
            this.userService.filtro = data;
        });
    }

    typeahead(elem: Element): Observable<any> {
        // const searchBox = ;

        return fromEvent(elem, 'input').pipe(
            map((e) => (e.target as HTMLInputElement).value),
            // map((e: KeyboardEvent) => (e.target as HTMLInputElement).value),
            // filter(text => text.length > 2),
            debounceTime(600),
            distinctUntilChanged()
            // switchMap(() => ajax('/api/endpoint'))
        );
    }

    edit(user: IUser | null) {
        this.userService.user = (user) ? user : new User();
    }

    openUserFormModal(user: IUser) {
        const initialState = { user: (user) ? user : new User() };
        this.bsModalRef = this.modalService.show(UserFormModalComponent, { id: 1, class: 'modal-lg', initialState });
        // this.bsModalRef.content.closeBtnName = 'Close';
    }

}
