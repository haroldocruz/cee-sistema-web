import { Component, OnInit } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { InstitutionTypeEnum } from 'src/app/interfaces/enumerations/InstitutionTypeEnum';
import { CeeInstitutionLocalService } from '../cee-institution-service.service';

@Component({
  selector: 'app-cee-institution-filter',
  templateUrl: './cee-institution-filter.component.html',
  styleUrls: ['./cee-institution-filter.component.less']
})
export class CeeInstitutionFilterComponent implements OnInit {

  search: string;
  institutionTypeEnum: typeof InstitutionTypeEnum;

  constructor(
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

  filtering(filter: string){
    this.ceeInstitutionLocalService.filter = filter;
  }

}
