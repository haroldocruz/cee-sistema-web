import { cloneDeep } from 'lodash';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { IAddress } from './../../../interfaces/Contact';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-address-modal',
  templateUrl: './contact-address-modal.component.html',
  styleUrls: ['./contact-address-modal.component.less']
})
export class ContactAddressModalComponent implements OnInit {

    addressListRef: IAddress[];
    address: IAddress;
    addressList: IAddress[];

    constructor(
        public bsModalRef: BsModalRef
    ) { }

    ngOnInit(): void {
        this.address = {}
    }

    addressToString(address: IAddress) {
        const array = [address.zipcode, address.country, address.state, address.city, address.district, address.place, address.number]
        let ats = ''
        array.forEach((e, i, l) => {
            if (e)
            ats += (ats.length > 0) ? ', ' + e : e;
        })
        return ats;
    }

    insertAddress(){
        this.addressList.push(this.address);
        this.address = {};
    }

    editAddress(address: IAddress){
        this.address = cloneDeep(address);
        this.removeAddress(address);
    }

    removeAddress(address: IAddress){
        const idx = this.addressList.indexOf(address);
        this.addressList.splice(idx, 1);
    }

    confirm(){
        this.addressListRef.splice(0, this.addressListRef.length)
        this.addressListRef.push(...this.addressList);
        this.bsModalRef.hide();
    }
}
