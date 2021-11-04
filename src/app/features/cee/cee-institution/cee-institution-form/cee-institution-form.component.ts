import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { InstitutionService } from 'src/app/services/institution.service';
import { AdministrativeSphereEnum } from 'src/app/interfaces/enumerations/administrativeSphereEnum';
import { InstitutionTypeEnum } from 'src/app/interfaces/enumerations/InstitutionTypeEnum';
import { Institution, IInstitution } from 'src/app/interfaces/Institution';
import { UtilService } from 'src/app/services/util.service';

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
    if (this.institution?._id) return;

    if (!this.institutionId) { this.institution = new Institution(); return; }

    //!APAGAR
    if (this.institutionId) { this.institution = { _id: `${this.institutionId}`, socialReason: `${this.institutionId}`, name: `Escola ${this.institution.name}`, initials: this.institution.initials }; return; }

    this.isLoading = true;
    this.institutionService.readById(this.institutionId).subscribe((data) => {
      if (data._id)
        this.institution = data;

      this.isLoading = false;
    });
  }

  create() {
    if (!UtilService.isConfirm()) return;

    UtilService.default(this.institutionService.create(this.institution));

    if (this.bsModalRef)
      this.bsModalRef.hide();
  }

  update() {

    if (!UtilService.isConfirm()) return;

    UtilService.default(this.institutionService.update(this.institution));

    if (this.bsModalRef)
      this.bsModalRef.hide();
  }

}
