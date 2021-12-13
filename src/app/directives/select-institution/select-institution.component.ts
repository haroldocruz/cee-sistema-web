import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { IInstitution } from 'src/app/interfaces/Institution';
import { IQueryConfig } from 'src/app/interfaces/IQueryConfig';
import { EventEmitterService } from 'src/app/services/event-emitter.service';
import { InstitutionService } from 'src/app/services/institution.service';
import { UtilService } from 'src/app/services/util.service';

interface ToViewSelectInstitutionComponent {
  institution?: {
    _id?: string,
    name?: string,
    city?: string,
  }
}

@Component({
  selector: 'app-select-institution',
  templateUrl: './select-institution.component.html',
  styleUrls: ['./select-institution.component.less']
})
export class SelectInstitutionComponent implements OnInit {

  @Output() event = new EventEmitter<IInstitution>();

  private institution: IInstitution;
  public toViewObject: ToViewSelectInstitutionComponent;

  public cnpj: string;

  constructor(
    public bsModalRef: BsModalRef,
    private institutionService: InstitutionService
  ) { }

  ngOnInit(): void {
    this.toViewObject = {}
  }

  selectInstitution() {
    this.event.emit(this.institution);
    EventEmitterService.get('SelectInstitutionComponent.selected').emit(this.institution);

    if(this.bsModalRef)
      this.bsModalRef.hide();
  }

  findInstitution() {
    if (this.cnpj === '') {
      UtilService.notifying.showWarning(`Por favor, insira um CNPJ válido!`, `Status 400`);
      return;
    }

    let queryConfig: IQueryConfig = {
      populateList: []
    };
    let institution = {};
    institution['cnpj'] = this.cnpj;
    this.institutionService.filterOne(institution, queryConfig).subscribe((data) => {

      if (data.statusCode) {
        UtilService.notifying.showWarning(data.statusMessage, `Ops! ${data.statusCode}`);
        return;
      }

      this.institution = data;

      this.toView(data);

      UtilService.notifying.showSuccess(`Localizado!`, `Status 200`);
    });
  }


  private toView(o: IInstitution) {
    this.toViewObject = {
      institution: {
        _id: o._id,
        name: o.name,
        city: o.contact?.addressList[0]?.city
      }
    }
  }

}
