import { ContactAddressModalComponent } from './../../contact/contact-address-modal/contact-address-modal.component';
import { ContactEmailModalComponent } from './../../contact/contact-email-modal/contact-email-modal.component';
import { ContactPhoneModalComponent } from './../../contact/contact-phone-modal/contact-phone-modal.component';
import { IPhone, IEmail, IAddress } from './../../../interfaces/Contact';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { NotificationService } from './../../../services/notification.service';
import { StatusEnum } from './../../../interfaces/Status';
import { GenderEnum, IUser, MaritalStatusEnum } from './../../../interfaces/User';
import { UserLocalService } from '../user.local.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { cloneDeep, concat } from "lodash";
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-user-form-modal',
    templateUrl: './user-form-modal.component.html',
    styleUrls: ['./user-form-modal.component.less']
})
export class UserFormModalComponent implements OnInit {

    checkoutForm;

    statusList: string[];
    genderList: string[];
    maritalStatusList: string[];
    @Input() user: IUser;

    phone: IPhone;
    email: IEmail;
    address: IAddress;
    isDataAccess: boolean;

    constructor(
        private formBuilder: FormBuilder,
        public bsModalRef: BsModalRef,
        public bsModalRef2: BsModalRef,
        private modalService: BsModalService,
        public userService: UserLocalService,
        private notify: NotificationService,
        private router: Router
    ) {
        // this.reloadComponent()
    }

    onSubmit(){}

    reloadComponent() {
        // override the route reuse strategy
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        }

        this.router.events.subscribe((evt) => {
            if (evt instanceof NavigationEnd) {
                // trick the Router into believing it's last link wasn't previously loaded
                this.router.navigated = false;
                // if you need to scroll back to top, here is the right place
                window.scrollTo(0, 0);
            }
        });
    }

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
        if (!this.userService.isConfirm()) return;

        this.userService.default(this.userService.create(this.user));
        this.bsModalRef.hide();
    }

    update(): void {
        if (!this.userService.isConfirm()) return;
        if (!this.isDataAccess) delete this.user.dataAccess;

        // const user: IUser = { "_id": this.user._id, name: "super", cpf: 123, status: true, dataAccess: {} }
        this.userService.default(this.userService.update(this.user));
        this.bsModalRef.hide();
    }

    openContactPhoneModal(user: IUser) {
        const initialState = { phoneList: cloneDeep(user.contact.phoneList), phoneListRef: user.contact.phoneList };
        this.bsModalRef2 = this.modalService.show(ContactPhoneModalComponent, { id: 2, class: 'modal-md', initialState });
        this.bsModalRef2.content.closeBtnName = 'Close';
    }

    openContactEmailModal(user: IUser) {
        const initialState = { emailList: cloneDeep(user.contact.emailList), emailListRef: user.contact.emailList };
        this.bsModalRef2 = this.modalService.show(ContactEmailModalComponent, { id: 2, class: 'modal-md', initialState });
        this.bsModalRef2.content.closeBtnName = 'Close';
    }

    openContactAddressModal(user: IUser) {
        const initialState = { addressList: cloneDeep(user.contact.addressList), addressListRef: user.contact.addressList };
        this.bsModalRef2 = this.modalService.show(ContactAddressModalComponent, { id: 2, class: 'modal-md', initialState });
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
