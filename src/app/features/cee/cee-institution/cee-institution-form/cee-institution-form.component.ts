import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { InstitutionService } from 'src/app/services/institution.service';
import { AdministrativeSphereEnum } from 'src/app/interfaces/enumerations/administrativeSphereEnum';
import { InstitutionTypeEnum } from 'src/app/interfaces/enumerations/InstitutionTypeEnum';
import { Institution, IInstitution, Fundaments, IFundaments } from 'src/app/interfaces/Institution';
import { UtilService } from 'src/app/services/util.service';
import { Address, Contact, Email, IAddress, IContact, IEmail, IPhone, Phone } from 'src/app/interfaces/Contact';
import { IEvidence } from 'src/app/interfaces/Evidence';
import { EventEmitterService } from 'src/app/services/event-emitter.service';
import { cloneDeep } from 'lodash';
import { ContactPhoneModalComponent } from 'src/app/features/contact/contact-phone-modal/contact-phone-modal.component';
import { ContactEmailModalComponent } from 'src/app/features/contact/contact-email-modal/contact-email-modal.component';
import { ContactAddressModalComponent } from 'src/app/features/contact/contact-address-modal/contact-address-modal.component';
import { EvidenceFormComponent } from 'src/app/directives/evidence-form/evidence-form.component';

@Component({
  selector: 'app-cee-institution-form',
  templateUrl: './cee-institution-form.component.html',
  styleUrls: ['./cee-institution-form.component.less']
})
export class CeeInstitutionFormComponent implements OnInit {

  @Input() public institution: IInstitution;
  @Input() public institutionId: String;

  public isLoading: boolean = false;

  public institutionTypeList: String[];
  public administrativeSphereList: String[];

  public fundaments: IFundaments;
  public contact: IContact;
  public phoneList: IPhone[];
  public emailList: IEmail[];
  public addressList: IAddress[];
  public legalActList: IEvidence[];

  constructor(
    public bsModalRef: BsModalRef,
    public bsModalRef2: BsModalRef,
    private modalService: BsModalService,
    private institutionService: InstitutionService,
    public util: UtilService
  ) {
    this.institution = new Institution();
  }

  ngOnInit(): void {
    this.institutionTypeList = Object.values(InstitutionTypeEnum);
    this.administrativeSphereList = Object.values(AdministrativeSphereEnum);

    this.index();
  }

  index() {
    if (this.institution?._id) {
      this.fundaments = this.institution.fundaments || new Fundaments();
      this.contact = new Contact();
      // this.contact.phoneList = this.institution.contact?.phoneList || new Array<Phone>(new Phone());
      // this.contact.emailList = this.institution.contact?.emailList || new Array<Email>(new Email());
      // this.contact.addressList = this.institution.contact?.addressList || new Array<Address>(new Address());
      this.legalActList = this.institution.legalActList || [];
      return;
    }

    if (!this.institutionId) {
      this.institution = new Institution();
      this.fundaments = new Fundaments();
      this.contact = new Contact();
      // this.contact.phoneList.push(new Phone());
      // this.contact.emailList = new Array<Email>(new Email());
      // this.contact.addressList = new Array<Address>(new Address());
      this.legalActList = [];
      return;
    }

    this.isLoading = true;
    this.institutionService.readById(this.institutionId).subscribe((data) => {
      if (data._id) {
        const iData: IInstitution = data;
        this.institution = iData;
        this.fundaments = iData.fundaments || new Fundaments();
        this.contact = new Contact();
        this.contact.phoneList = iData.contact?.phoneList || [];
        this.contact.emailList = iData.contact?.emailList || [];
        this.contact.addressList = iData.contact?.addressList || [];
        this.legalActList = iData.legalActList || [];
      }

      this.isLoading = false;
    });
  }

  create() {
    if (!UtilService.isConfirm()) return;

    this.institution.fundaments = this.fundaments;
    this.institution.contact = new Contact();
    this.institution.contact.phoneList = this.contact.phoneList;
    this.institution.contact.emailList = this.contact.emailList;
    this.institution.contact.addressList = this.contact.addressList;
    this.institution.legalActList = this.legalActList;

    UtilService.default(this.institutionService.create(this.institution));
    // EventEmitterService.get('is-success').emit(true);

    if (this.bsModalRef)
      this.bsModalRef.hide();
  }

  update() {

    if (!UtilService.isConfirm()) return;

    this.institution.fundaments = this.fundaments;
    this.institution.contact = new Contact();
    this.institution.contact.phoneList = this.contact.phoneList;
    this.institution.contact.emailList = this.contact.emailList;
    this.institution.contact.addressList = this.contact.addressList;
    this.institution.legalActList = this.legalActList;

    UtilService.default(this.institutionService.update(this.institution));
    // EventEmitterService.get('is-success').emit(true);

    if (this.bsModalRef)
      this.bsModalRef.hide();
  }

  openLegalActModal(evidenceList: IEvidence[]) {
    const initialState = { evidenceList: cloneDeep(evidenceList), evidenceListRef: evidenceList };
    this.bsModalRef2 = this.modalService.show(EvidenceFormComponent, { id: 2, class: 'modal-md', initialState });
    this.bsModalRef2.content.closeBtnName = 'Close';
  }

  openContactPhoneModal(contact: IContact) {
    const initialState = { phoneList: cloneDeep(contact.phoneList), phoneListRef: contact.phoneList };
    this.bsModalRef2 = this.modalService.show(ContactPhoneModalComponent, { id: 2, class: 'modal-md', initialState });
    this.bsModalRef2.content.closeBtnName = 'Close';
  }

  openContactEmailModal(contact: IContact) {
    const initialState = { emailList: cloneDeep(contact.emailList), emailListRef: contact.emailList };
    this.bsModalRef2 = this.modalService.show(ContactEmailModalComponent, { id: 2, class: 'modal-md', initialState });
    this.bsModalRef2.content.closeBtnName = 'Close';
  }

  openContactAddressModal(contact: IContact) {
    const initialState = { addressList: cloneDeep(contact.addressList), addressListRef: contact.addressList };
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

}
