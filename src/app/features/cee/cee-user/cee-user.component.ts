import { distinctUntilChanged, debounceTime, map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { CeeLocalService } from '../cee.local.service';

@Component({
    selector: 'app-cee-user',
    templateUrl: './cee-user.component.html',
    styleUrls: ['./cee-user.component.less']
})
export class CeeUserComponent implements OnInit {

    public filter: string;

    constructor(public ceeLocalService: CeeLocalService) { }
  
    ngOnInit(): void {
  
      this.typeahead(document.getElementById('search-box')).subscribe(data => {
        this.ceeLocalService.filter = data;
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
  }
  