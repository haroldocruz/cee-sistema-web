import { BsModalRef } from 'ngx-bootstrap/modal';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-modal',
  templateUrl: './contact-modal.component.html',
  styleUrls: ['./contact-modal.component.less']
})
export class ContactModalComponent implements OnInit {

    listRef: any[];
    obj: any;
    objList: any[];

    constructor(
        public bsModalRef: BsModalRef
    ) { }

    ngOnInit(): void {
        this.obj = {}
    }

    insertPhone(){
        this.objList.push(this.obj);
        this.obj = {};
    }

    removePhone(obj){
        const idx = this.objList.indexOf(obj);
        this.objList.splice(idx, 1);
    }

    confirm(){
        this.listRef.splice(0, this.listRef.length)
        this.listRef.push(...this.objList);
        this.bsModalRef.hide();
    }
}
