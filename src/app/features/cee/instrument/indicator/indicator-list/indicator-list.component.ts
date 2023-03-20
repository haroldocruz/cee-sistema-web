import { UtilService } from '../../../../../shared/services/util.service';
import { IndicatorFormComponent } from './../indicator-form/indicator-form.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Component, Input, OnInit } from '@angular/core';
import { IAct } from 'src/app/interfaces/Act';
import { IIndicator } from 'src/app/interfaces/Indicator';
import { EventEmitterService } from 'src/app/shared/services/event-emitter.service';
import { IndicatorLocalService } from '../indicator.local.service';

import moment from 'moment'
import { IRegional } from 'src/app/interfaces/Regional';

interface IIndicatorListTemplate {
    "_id"?: string;
    "orderCode"?: string;
    "title"?: string;
    "description": string;
    // "modality": string; //Enum
    // "evaluationType": string; //Enum
    "act": string; //Enum
}

@Component({
    selector: 'app-indicator-list',
    templateUrl: './indicator-list.component.html',
    styleUrls: ['./indicator-list.component.less']
})
export class IndicatorListComponent implements OnInit {

    public indicatorList: IIndicator[];

    public toViewIndicatorList: IIndicatorListTemplate[];

    public filter: string;
    public filterAct: IAct;
    public filterRegional: IRegional;

    bsModalRef: BsModalRef;

    constructor(
        private bsModalService: BsModalService,
        public indicatorLocalService: IndicatorLocalService
    ) { }

    ngOnInit(): void {
        this.index();

        EventEmitterService.get('ActListComponent.selected').subscribe((selected) => {
            this.filterAct = selected;
        });
        EventEmitterService.get('RegionalListComponent.selected').subscribe((selected) => {
            this.filterRegional = selected;
        });
        EventEmitterService.get('IndicatorFilterComponent.filter').subscribe((selected) => {
            this.filter = selected;
        });
    }

    index() {
        if (this.indicatorList) return;

        // this.indicatorService.read().subscribe((data) => {
        //   if (data.statusMessage) {
        //     UtilService.notifying.showError(data.statusMessage, data.statusCode.toString());
        //     return;
        //   }
        //   this.indicatorList = data;
        //   this.toView();
        // });
        this.mockToView();
    }

    openIndicatorFormModal(indicator: IIndicator): void {
        const initialState = { indicator }
        this.bsModalRef = this.bsModalService.show(IndicatorFormComponent, { id: UtilService.getRandom9Digits(), class: 'modal-lg', initialState })
    }

    toView() {
        this.toViewIndicatorList = this.indicatorList.map((i) => {
            return {
                "_id": i._id,
                "orderCode": i.orderCode,
                "title": i.title,
                "description": i.description,
                "evaluationType": i.evaluationType,
                "act": i.act,
            }
        });
    }

    mockToView() {
        this.toViewIndicatorList = [
            {
                "_id": "1",
                "orderCode": "1",
                "title": "Projeto de autoavaliação institucional",
                "description": "Esta é uma descrição ...",
                "act": "Credenciamento",
            },
            {
                "_id": "2",
                "orderCode": "2",
                "title": "Autoavaliação institucional: participação da comunidade acadêmica",
                "description": "Esta é uma descrição ...",
                "act": "Reconhecimento",
            }
        ]
    }

}
