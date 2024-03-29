import { distinctUntilChanged, debounceTime, map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { CeeLocalService } from '../cee.local.service';
import { Title } from '@angular/platform-browser';
import { CeeUserBindComponent } from './cee-user-bind/cee-user-bind.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { EventEmitterService } from 'src/app/shared/services/event-emitter.service';

@Component({
    selector: 'app-cee-user',
    templateUrl: './cee-user.component.html',
    styleUrls: ['./cee-user.component.less']
})
export class CeeUserComponent implements OnInit {

    public bsModalRef: BsModalRef;
    public filter: string;

    constructor(
        private titleService: Title,
        public modalService: BsModalService,
        public ceeLocalService: CeeLocalService
    ) { }

    ngOnInit(): void {
        this.titleService.setTitle('CEE | User')

        this.typeahead(document.getElementById('search-box')).subscribe(data => {
            this.ceeLocalService.filter = data;
        });
    }

    openBindUserInInstitutionModal() {
        const initialState = {};
        this.bsModalRef = this.modalService.show(CeeUserBindComponent, { id: 1, class: 'modal-lg', initialState });
        this.bsModalRef.content.closeBtnName = 'Close';
    }

    refresh() {
        EventEmitterService.get('is-success').emit(true);
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
}
