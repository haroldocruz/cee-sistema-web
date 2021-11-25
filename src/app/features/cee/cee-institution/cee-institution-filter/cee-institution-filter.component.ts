import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { fromEvent, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { InstitutionTypeEnum } from 'src/app/interfaces/enumerations/InstitutionTypeEnum';
import { IInstitution } from 'src/app/interfaces/Institution';
import { EventEmitterService } from 'src/app/services/event-emitter.service';
import { UtilService } from 'src/app/services/util.service';
import { CeeInstitutionFormComponent } from '../cee-institution-form/cee-institution-form.component';
import { CeeInstitutionLocalService } from '../cee-institution.local.service';

interface ITypesCount {
  institutionCount: number;
  pubAdmCount: number;
  pubUECount: number;
  privMaintainedCount: number;
  privMaintainerCount: number;
  otherCount: number;
}

@Component({
  selector: 'app-cee-institution-filter',
  templateUrl: './cee-institution-filter.component.html',
  styleUrls: ['./cee-institution-filter.component.less']
})
export class CeeInstitutionFilterComponent implements OnInit {

  public bsModalRef: BsModalRef;

  @Input() private iList: IInstitution[];

  public search: string;
  public searchTimeout: any;
  public iTypeEnum: typeof InstitutionTypeEnum;
  public typesCount: ITypesCount;

  constructor(
    private bsModalService: BsModalService,
    public ceeInstitutionLocalService: CeeInstitutionLocalService
  ) { }

  ngOnInit(): void {
    this.iTypeEnum = InstitutionTypeEnum;
    this.initTypesCount();

    this.index();

    UtilService.typeahead(document.getElementById('search-box')).subscribe(data => {
      this.ceeInstitutionLocalService.search = data;
    });
  }

  changeSearch() {
    clearTimeout(this.searchTimeout);
    this.searchTimeout = setTimeout(() => {
      this.ceeInstitutionLocalService.search = this.search;
    }, 600);
  }

  index() {
    EventEmitterService.get('getInstitutionList').subscribe((data) => {
      this.iList = data;
      this.countToFilter();
    })
  }

  // typeahead(elem: Element): Observable<any> {
  //   // const searchBox = ;

  //   return fromEvent(elem, 'input').pipe(
  //     map((e) => (e.target as HTMLInputElement).value),
  //     // map((e: KeyboardEvent) => (e.target as HTMLInputElement).value),
  //     // filter(text => text.length > 2),
  //     debounceTime(600),
  //     distinctUntilChanged()
  //     // switchMap(() => ajax('/api/endpoint'))
  //   );
  // }

  openInstitutionFormModal(institution: any) {
    const initialState = { institution };
    this.bsModalRef = this.bsModalService.show(CeeInstitutionFormComponent, { id: UtilService.getRandom9Digits(), class: 'modal-lg', initialState });
    this.bsModalRef.content.closeBtnName = 'Close';
  }

  filtering(filter: string) {
    this.ceeInstitutionLocalService.filter = filter;
  }

  refresh() {
    EventEmitterService.get('is-success').emit(true);
  }

  private countToFilter(): void {

    this.initTypesCount();

    this.typesCount.institutionCount = this.iList.length;

    this.iList.map((e) => {
      if (e.institutionType == this.iTypeEnum.PUBLIC_ADM)
        this.typesCount.pubAdmCount += 1;
      if (e.institutionType == this.iTypeEnum.PUBLIC_UE)
        this.typesCount.pubUECount += 1;
      if (e.institutionType == this.iTypeEnum.PRIVATE_MAINTAINED)
        this.typesCount.privMaintainedCount += 1;
      if (e.institutionType == this.iTypeEnum.PRIVATE_MAINTAINER)
        this.typesCount.privMaintainerCount += 1;
      // if (e.institutionType == this.iTypeEnum.OTHER)
      //   this.typesCount.otherCount += 1;
      if (e.institutionType == this.iTypeEnum.UNINFORMED)
        this.typesCount.otherCount += 1;
    });
  }

  private initTypesCount() {
    this.typesCount = {
      institutionCount: 0,
      pubAdmCount: 0,
      pubUECount: 0,
      privMaintainedCount: 0,
      privMaintainerCount: 0,
      otherCount: 0,
    }
  }

}
