import { GroupService } from './group.service';
import { distinctUntilChanged } from 'rxjs/operators';
import { debounceTime } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { IGroup, Group } from 'src/app/interfaces/Group';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.less']
})
export class GroupComponent implements OnInit {

  // public filterInputId = new FormControl();
  public filtro: string;

  constructor(public groupService: GroupService) { }

  ngOnInit(): void {

    this.typeahead(document.getElementById('search-box')).subscribe(data => {
      this.groupService.filtro = data;
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

  edit(group: IGroup | null) {
    this.groupService.group = (group) ? group : new Group();
  }
}
