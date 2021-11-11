import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { InstitutionService } from 'src/app/services/institution.service';
import { AdministrativeSphereEnum } from 'src/app/interfaces/enumerations/administrativeSphereEnum';
import { InstitutionTypeEnum } from 'src/app/interfaces/enumerations/InstitutionTypeEnum';
import { Institution, IInstitution, Fundaments, IFundaments } from 'src/app/interfaces/Institution';
import { UtilService } from 'src/app/services/util.service';
import { Address, Contact, Email, IAddress, IContact, IEmail, IPhone, Phone } from 'src/app/interfaces/Contact';
import { ILegalAct, LegalAct } from 'src/app/interfaces/LegalAct';
import { EventEmitterService } from 'src/app/services/event-emitter.service';

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
  public legalActList: ILegalAct[];

  constructor(
    public bsModalRef: BsModalRef,
    private institutionService: InstitutionService
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
      this.contact.phoneList = this.institution.contact?.phoneList || new Array<Phone>(new Phone());
      this.contact.emailList = this.institution.contact?.emailList || new Array<Email>(new Email());
      this.contact.addressList = this.institution.contact?.addressList || new Array<Address>(new Address());
      this.legalActList = this.institution.legalActList || new Array<LegalAct>(new LegalAct());
      return;
    }

    if (!this.institutionId) {
      this.institution = new Institution();
      this.fundaments = new Fundaments();
      this.contact = new Contact();
      this.contact.phoneList.push(new Phone());
      this.contact.emailList = new Array<Email>(new Email());
      this.contact.addressList = new Array<Address>(new Address());
      this.legalActList = new Array<LegalAct>(new LegalAct());
      return;
    }

    this.isLoading = true;
    this.institutionService.readById(this.institutionId).subscribe((data) => {
      if (data._id) {
        const iData: IInstitution = data;
        this.institution = iData;
        this.fundaments = iData.fundaments || new Fundaments();
        this.contact = new Contact();
        this.contact.phoneList = iData.contact?.phoneList || new Array<Phone>(new Phone());
        this.contact.emailList = iData.contact?.emailList || new Array<Email>(new Email());
        this.contact.addressList = iData.contact?.addressList || new Array<Address>(new Address());
        this.legalActList = iData.legalActList || new Array<LegalAct>(new LegalAct());
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

}
