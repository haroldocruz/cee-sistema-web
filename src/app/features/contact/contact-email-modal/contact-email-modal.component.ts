import { cloneDeep } from 'lodash';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { IEmail } from './../../../interfaces/Contact';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-email-modal',
  templateUrl: './contact-email-modal.component.html',
  styleUrls: ['./contact-email-modal.component.less']
})
export class ContactEmailModalComponent implements OnInit {

    emailListRef: IEmail[];
    email: IEmail;
    emailList: IEmail[];

    constructor(
        public bsModalRef: BsModalRef
    ) { }

    ngOnInit(): void {
        this.email = {}
    }

    insertEmail(){
        this.emailList.push(this.email);
        this.email = {};
    }

    editEmail(email: IEmail){
        this.email = cloneDeep(email);
        this.removeEmail(email);
    }

    removeEmail(email: IEmail){
        const idx = this.emailList.indexOf(email);
        this.emailList.splice(idx, 1);
    }

    confirm(){
        this.emailListRef.splice(0, this.emailListRef.length)
        this.emailListRef.push(...this.emailList);
        this.bsModalRef.hide();
    }
}
