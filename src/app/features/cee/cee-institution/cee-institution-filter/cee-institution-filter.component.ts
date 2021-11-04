import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { fromEvent, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { InstitutionTypeEnum } from 'src/app/interfaces/enumerations/InstitutionTypeEnum';
import { UtilService } from 'src/app/services/util.service';
import { CeeInstitutionFormComponent } from '../cee-institution-form/cee-institution-form.component';
import { CeeInstitutionLocalService } from '../cee-institution.local.service';

@Component({
  selector: 'app-cee-institution-filter',
  templateUrl: './cee-institution-filter.component.html',
  styleUrls: ['./cee-institution-filter.component.less']
})
export class CeeInstitutionFilterComponent implements OnInit {

  public bsModalRef: BsModalRef;

  public search: string;
  public institutionTypeEnum: typeof InstitutionTypeEnum;

  constructor(
    private bsModalService: BsModalService,
    public ceeInstitutionLocalService: CeeInstitutionLocalService
  ) { }

  ngOnInit(): void {
    this.institutionTypeEnum = InstitutionTypeEnum;
  
    this.typeahead(document.getElementById('search-box')).subscribe(data => {
      this.ceeInstitutionLocalService.search = data;
    });
  }

  typeahead(elem: Element): Observable<any>{
    // const searchBox = ;

    return fromEvent(elem, 'input').pipe(
      map((e) => (e.target as HTMLInputElement).value),
      // map((e: KeyboardEvent) => (e.target as HTMLInputElement).value),
      // filter(text => text.length > 2),
      debounceTime(600),
      distinctUntilChanged()
      // switchMap(() => ajax('/api/endpoint'))
    );
  }
  
  openGroupFormModal(institution: any){
    const initialState = { institution };
    this.bsModalRef = this.bsModalService.show(CeeInstitutionFormComponent, { id: UtilService.getRandom9Digits(), class: 'modal-lg', initialState });
    this.bsModalRef.content.closeBtnName = 'Close';
  }

  filtering(filter: string){
    this.ceeInstitutionLocalService.filter = filter;
  }

}
