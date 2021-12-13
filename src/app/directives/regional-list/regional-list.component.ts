import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { RegionalList, IRegional } from 'src/app/interfaces/Regional';
import { EventEmitterService } from 'src/app/services/event-emitter.service';

interface SchemaRegionalListComponent {
}

@Component({
  selector: 'app-regional-list',
  templateUrl: './regional-list.component.html',
  styleUrls: ['./regional-list.component.less']
})
export class RegionalListComponent implements OnInit {

  @Input() regionalList: IRegional[];

  constructor(
    public bsModalRef: BsModalRef,
  ) { }

  ngOnInit(): void {
    if (!this.regionalList) this.regionalList = RegionalList;
  }

  index() { }

  selected(regional: IRegional): void {

    EventEmitterService.get('RegionalListComponent.selected').emit(regional);

    if (this.bsModalRef)
      this.bsModalRef.hide();
  }

}
