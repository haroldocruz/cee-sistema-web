import { Component, Input, OnInit } from '@angular/core';
import { IInstrument } from 'src/app/interfaces/Instrument';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { InstrumentFormComponent } from '../instrument-form/instrument-form.component';
import { UtilService } from 'src/app/shared/services/util.service';
import { EventEmitterService } from 'src/app/shared/services/event-emitter.service';
import { InstrumentLocalService } from '../instrument.local.service';
import { ActListComponent } from 'src/app/shared/directives/act-list/act-list.component';
import { RegionalListComponent } from 'src/app/shared/directives/regional-list/regional-list.component';
import { IRegional } from 'src/app/interfaces/Regional';
import { IAct } from 'src/app/interfaces/Act';

@Component({
    selector: 'app-instrument-filter',
    templateUrl: './instrument-filter.component.html',
    styleUrls: ['./instrument-filter.component.less']
})
export class InstrumentFilterComponent implements OnInit {

    act: IAct;
    regional: IRegional;

    search: string;
    searchTimeout: any;

    bsModalRef: BsModalRef;

    constructor(
        private bsModalService: BsModalService,
        private instrumentLocalService: InstrumentLocalService
    ) { }

    ngOnInit(): void {
    }

    changeSearch(): void {
        clearTimeout(this.searchTimeout);
        this.searchTimeout = setTimeout(() => {
            EventEmitterService.get('InstrumentFilterComponent.filter').emit(this.search);
        }, 600);
    }

    filtering(filter: string): void {
        // EventEmitterService.get('InstrumentFilterComponent.filter').emit(filter);
    }

    openInstrumentFormModal(): void {
        this.bsModalRef = this.bsModalService.show(InstrumentFormComponent, { id: UtilService.getRandom9Digits(), class: 'modal-lg', initialState: null })
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
