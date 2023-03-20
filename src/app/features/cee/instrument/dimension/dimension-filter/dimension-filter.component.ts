import { Component, Input, OnInit } from '@angular/core';
import { IDimension } from 'src/app/interfaces/Dimension';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { DimensionFormComponent } from '../dimension-form/dimension-form.component';
import { UtilService } from 'src/app/shared/services/util.service';
import { EventEmitterService } from 'src/app/shared/services/event-emitter.service';
import { DimensionLocalService } from '../dimension.local.service';
import { ActListComponent } from 'src/app/shared/directives/act-list/act-list.component';
import { RegionalListComponent } from 'src/app/shared/directives/regional-list/regional-list.component';
import { IRegional } from 'src/app/interfaces/Regional';
import { IAct } from 'src/app/interfaces/Act';

@Component({
    selector: 'app-dimension-filter',
    templateUrl: './dimension-filter.component.html',
    styleUrls: ['./dimension-filter.component.less']
})
export class DimensionFilterComponent implements OnInit {

    act: IAct;
    regional: IRegional;

    search: string;
    searchTimeout: any;

    bsModalRef: BsModalRef;

    constructor(
        private bsModalService: BsModalService,
        private dimensionLocalService: DimensionLocalService
    ) { }

    ngOnInit(): void {
    }

    changeSearch(): void {
        clearTimeout(this.searchTimeout);
        this.searchTimeout = setTimeout(() => {
            EventEmitterService.get('DimensionFilterComponent.filter').emit(this.search);
        }, 600);
    }

    filtering(filter: string): void {
        // EventEmitterService.get('DimensionFilterComponent.filter').emit(filter);
    }

    openDimensionFormModal(): void {
        this.bsModalRef = this.bsModalService.show(DimensionFormComponent, { id: UtilService.getRandom9Digits(), class: 'modal-lg', initialState: null })
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
