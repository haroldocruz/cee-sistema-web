import { Component, OnInit } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { DocTypeEnum } from 'src/app/interfaces/IDoc';
import { DocumentLocalService } from '../document.local.service';

@Component({
  selector: 'app-document-filter',
  templateUrl: './document-filter.component.html',
  styleUrls: ['./document-filter.component.less']
})
export class DocumentFilterComponent implements OnInit {

  search: string;
  docTypeEnum: typeof DocTypeEnum;

  DocumentLocalService = DocumentLocalService;

  constructor() { }

  ngOnInit(): void {
    this.docTypeEnum = DocTypeEnum;
  
    this.typeahead(document.getElementById('search-box')).subscribe(data => {
      DocumentLocalService.search = data;
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
    DocumentLocalService.filter = filter;
  }

}
