import { BsModalRef } from 'ngx-bootstrap/modal';
import { IPhone } from './../../../interfaces/Contact';
import { Component, OnInit } from '@angular/core';
import { cloneDeep, isEmpty } from 'lodash';

@Component({
    selector: 'app-contact-phone-modal',
    templateUrl: './contact-phone-modal.component.html',
    styleUrls: ['./contact-phone-modal.component.less']
})
export class ContactPhoneModalComponent implements OnInit {

    phoneListRef: IPhone[];
    phone: IPhone;
    phoneList: IPhone[];

    constructor(
        public bsModalRef: BsModalRef
    ) { }

    ngOnInit(): void {
        this.phone = {}
    }

    insertPhone(){
        if(isEmpty(this.phone)) return;
        
        this.phoneList.push(this.phone);
        this.phone = {};
    }

    editPhone(phone: IPhone){
        this.phone = cloneDeep(phone);
        this.removePhone(phone);
    }

    removePhone(phone: IPhone){
        const idx = this.phoneList.indexOf(phone);
        this.phoneList.splice(idx, 1);
    }

    confirm(){
        this.phoneListRef.splice(0, this.phoneListRef.length)
        this.phoneListRef.push(...this.phoneList);
        this.bsModalRef.hide();
    }
}
