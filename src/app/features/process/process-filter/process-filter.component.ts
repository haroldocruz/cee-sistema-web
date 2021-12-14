import { Component, Input, OnInit } from '@angular/core';
import { IProcess } from 'src/app/interfaces/Process';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ProcessFormComponent } from '../process-form/process-form.component';
import { UtilService } from 'src/app/services/util.service';
import { EventEmitterService } from 'src/app/services/event-emitter.service';
import { ProcessLocalService } from '../process.local.service';
import { ActListComponent } from 'src/app/directives/act-list/act-list.component';
import { RegionalListComponent } from 'src/app/directives/regional-list/regional-list.component';
import { IRegional } from 'src/app/interfaces/Regional';
import { IAct } from 'src/app/interfaces/Act';

@Component({
  selector: 'app-process-filter',
  templateUrl: './process-filter.component.html',
  styleUrls: ['./process-filter.component.less']
})
export class ProcessFilterComponent implements OnInit {

  @Input() processList: IProcess[];

  act: IAct;
  regional: IRegional;

  search: string;
  searchTimeout: any;

  bsModalRef: BsModalRef;

  constructor(
    private bsModalService: BsModalService,
    private processLocalService: ProcessLocalService
  ) { }

  ngOnInit(): void {
  }

  changeSearch(): void {
    clearTimeout(this.searchTimeout);
    this.searchTimeout = setTimeout(() => {
      EventEmitterService.get('ProcessFilterComponent.filter').emit(this.search);
    }, 600);
  }

  filtering(filter: string): void {
    // EventEmitterService.get('ProcessFilterComponent.filter').emit(filter);
  }

  openProcessFormModal(): void {
    this.bsModalRef = this.bsModalService.show(ProcessFormComponent, { id: UtilService.getRandom9Digits(), class: 'modal-lg', initialState: null })
  }

  openActListModal(): void {
    this.bsModalRef = this.bsModalService.show(ActListComponent, { id: UtilService.getRandom9Digits(), class: 'modal-md', initialState: null })
    EventEmitterService.get('ActListComponent.selected').subscribe((selected) => {
      this.act = selected;
    })
  }

  openRegionalListModal() {
    this.bsModalRef = this.bsModalService.show(RegionalListComponent, { id: UtilService.getRandom9Digits(), class: 'modal-md', initialState: null })
    EventEmitterService.get('RegionalListComponent.selected').subscribe((selected) => {
      this.regional = selected;
    })
  }

  refresh() {
    EventEmitterService.get('is-success').emit(true);
  }

}
