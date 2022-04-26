import { Component, Input, OnInit } from '@angular/core';
import { IAct } from 'src/app/interfaces/Act';
import { IInstrument } from 'src/app/interfaces/Instrument';
import { EventEmitterService } from 'src/app/services/event-emitter.service';
import { InstrumentLocalService } from '../instrument.local.service';

import moment from 'moment'
import { IRegional } from 'src/app/interfaces/Regional';

interface IInstrumentListTemplate {
  "_id"?: string;
  "orderCode"?: string;
  "title"?: string;
  "description": string;
  // "modality": string; //Enum
  // "evaluationType": string; //Enum
  "act": string; //Enum
}

@Component({
  selector: 'app-instrument-list',
  templateUrl: './instrument-list.component.html',
  styleUrls: ['./instrument-list.component.less']
})
export class InstrumentListComponent implements OnInit {

  public instrumentList: IInstrument[];

  public toViewInstrumentList: IInstrumentListTemplate[];

  public filter: string;
  public filterAct: IAct;
  public filterRegional: IRegional;

  constructor(
    public instrumentLocalService: InstrumentLocalService
  ) { }

  ngOnInit(): void {
    this.index();

    EventEmitterService.get('ActListComponent.selected').subscribe((selected) => {
      this.filterAct = selected;
    });
    EventEmitterService.get('RegionalListComponent.selected').subscribe((selected) => {
      this.filterRegional = selected;
    });
    EventEmitterService.get('InstrumentFilterComponent.filter').subscribe((selected) => {
      this.filter = selected;
    });
  }

  index() {
    if (this.instrumentList) return;

    // this.instrumentService.read().subscribe((data) => {
    //   if (data.statusMessage) {
    //     UtilService.notifying.showError(data.statusMessage, data.statusCode.toString());
    //     return;
    //   }
    //   this.instrumentList = data;
    //   this.toView();
    // });
    this.mockToView();
  }

  toView() {
    this.toViewInstrumentList = this.instrumentList.map((i) => {
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
    this.toViewInstrumentList = [
      {
        "_id": "1",
        "orderCode": "1",
        "title": "Instrumento para o ato de Credenciamento",
        "description": "Esta é uma descrição ...",
        "act": "Credenciamento",
      },
      {
        "_id": "2",
        "orderCode": "2",
        "title": "Instrumento para o ato de Reconhecimento",
        "description": "Esta é uma descrição ...",
        "act": "Reconhecimento",
      }
    ]
  }

}
