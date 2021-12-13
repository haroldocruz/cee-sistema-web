import { ContactAddressModalComponent } from '../../contact/contact-address-modal/contact-address-modal.component';
import { ContactEmailModalComponent } from '../../contact/contact-email-modal/contact-email-modal.component';
import { ContactPhoneModalComponent } from '../../contact/contact-phone-modal/contact-phone-modal.component';
import { IPhone, IEmail, IAddress } from '../../../interfaces/Contact';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { NotificationService } from '../../../services/notification.service';
import { StatusEnum } from '../../../interfaces/Status';
import { GenderEnum, IUser, MaritalStatusEnum } from '../../../interfaces/User';
import { Component, Input, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { cloneDeep } from "lodash";
import { FormBuilder } from '@angular/forms';
import { UtilService } from 'src/app/services/util.service';
import { UserService } from 'src/app/services/user.service';

@Component({
    selector: 'app-user-form',
    templateUrl: './user-form.component.html',
    styleUrls: ['./user-form.component.less']
})
export class UserFormComponent implements OnInit {

    @Input() user: IUser;
    
    checkoutForm;

    statusList: string[];
    genderList: string[];
    maritalStatusList: string[];

    phone: IPhone;
    email: IEmail;
    address: IAddress;
    isDataAccess: boolean;

    constructor(
        public bsModalRef: BsModalRef,
        public bsModalRef2: BsModalRef,
        private bsModalService: BsModalService,
        public utilService: UtilService,
        public userService: UserService
    ) {
        // this.reloadComponent()
    }

    onSubmit(){}

    ngOnInit(): void {

        // this.checkoutForm = this.formBuilder.group({
        //     name: [this.user.name],
        //     cpf: [this.user.cpf]
        // })

        this.statusList = Object.values(StatusEnum)
        this.genderList = Object.values(GenderEnum)
        this.maritalStatusList = Object.values(MaritalStatusEnum)
        this.phone = {}
        this.email = {}
        this.address = {}
    }

    create(): void {
        if (!UtilService.isConfirm()) return;

        UtilService.default(this.userService.create(this.user));
        this.bsModalRef.hide();
    }

    update(): void {
        if (!UtilService.isConfirm()) return;
        if (!this.isDataAccess) delete this.user.dataAccess;

        // const user: IUser = { "_id": this.user._id, name: "super", cpf: 123, status: true, dataAccess: {} }
        UtilService.default(this.userService.update(this.user));
        this.bsModalRef.hide();
    }

    openContactPhoneModal(user: IUser) {
        const initialState = { phoneList: cloneDeep(user.contact.phoneList), phoneListRef: user.contact.phoneList };
        this.bsModalRef2 = this.bsModalService.show(ContactPhoneModalComponent, { id: 2, class: 'modal-md', initialState });
        this.bsModalRef2.content.closeBtnName = 'Close';
    }

    openContactEmailModal(user: IUser) {
        const initialState = { emailList: cloneDeep(user.contact.emailList), emailListRef: user.contact.emailList };
        this.bsModalRef2 = this.bsModalService.show(ContactEmailModalComponent, { id: 2, class: 'modal-md', initialState });
        this.bsModalRef2.content.closeBtnName = 'Close';
    }

    openContactAddressModal(user: IUser) {
        const initialState = { addressList: cloneDeep(user.contact.addressList), addressListRef: user.contact.addressList };
        this.bsModalRef2 = this.bsModalService.show(ContactAddressModalComponent, { id: 2, class: 'modal-md', initialState });
        this.bsModalRef2.content.closeBtnName = 'Close';
    }

    addressToString(address: IAddress) {
        const array = [address.zipcode, address.country, address.state, address.city, address.district, address.place, address.number]
        let result = ''
        array.forEach((e, i, l) => {
            if (e)
            result += (result.length > 0) ? ', ' + e : e;
        })
        return result;
    }

    // insertPhone(){
    //     this.user.contact.phoneList.push(this.phone);
    //     this.phone = {};
    // }

    // removePhone(){
    //     const idx = this.user.contact.phoneList.indexOf(this.phone);
    //     this.user.contact.phoneList.splice(idx, 1);
    // }

    // insertEmail(){
    //     this.user.contact.emailList.push(this.email);
    //     this.email = {};
    // }

    // removeEmail(email){
    //     const idx = this.user.contact.emailList.indexOf(email);
    //     this.user.contact.emailList.splice(idx, 1);
    // }

    // insertAddress(){
    //     this.user.contact.addressList.push(this.address);
    //     this.address = {};
    // }

    // removeAddress(){
    //     const idx = this.user.contact.addressList.indexOf(this.address);
    //     this.user.contact.addressList.splice(idx, 1);
    // }

}
