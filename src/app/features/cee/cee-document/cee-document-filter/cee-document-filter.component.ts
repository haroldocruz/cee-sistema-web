import { Component, OnInit } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { DocTypeEnum } from 'src/app/interfaces/IDoc';
import { CeeDocumentLocalService } from '../cee-document.local.service';

@Component({
  selector: 'app-cee-document-filter',
  templateUrl: './cee-document-filter.component.html',
  styleUrls: ['./cee-document-filter.component.less']
})
export class CeeDocumentFilterComponent implements OnInit {

  search: string;
  docTypeEnum: typeof DocTypeEnum;

  CeeDocumentLocalService = CeeDocumentLocalService;

  constructor() { }

  ngOnInit(): void {
    this.docTypeEnum = DocTypeEnum;
  
    this.typeahead(document.getElementById('search-box')).subscribe(data => {
      CeeDocumentLocalService.search = data;
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
    CeeDocumentLocalService.filter = filter;
  }

}
