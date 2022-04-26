import { UtilService } from './../../../../../services/util.service';
import { DimensionFormComponent } from './../dimension-form/dimension-form.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Component, Input, OnInit } from '@angular/core';
import { IAct } from 'src/app/interfaces/Act';
import { IDimension } from 'src/app/interfaces/Dimension';
import { EventEmitterService } from 'src/app/services/event-emitter.service';
import { DimensionLocalService } from '../dimension.local.service';

import moment from 'moment';
import { IRegional } from 'src/app/interfaces/Regional';
import { uniqueId } from 'lodash';

interface IDimensionListTemplate {
  _id?: string;
  orderCode?: string;
  title?: string;
  description: string;
}

@Component({
  selector: 'app-dimension-list',
  templateUrl: './dimension-list.component.html',
  styleUrls: ['./dimension-list.component.less'],
})
export class DimensionListComponent implements OnInit {
  public dimensionList: IDimension[];

  public toViewDimensionList: IDimensionListTemplate[];

  public filter: string;
  public filterAct: IAct;
  public filterRegional: IRegional;

  bsModalRef: BsModalRef;

  constructor(
    private bsModalService: BsModalService,
    public dimensionLocalService: DimensionLocalService
    ) {}

  ngOnInit(): void {
    this.index();

    EventEmitterService.get('ActListComponent.selected').subscribe(
      (selected) => {
        this.filterAct = selected;
      }
    );
    EventEmitterService.get('RegionalListComponent.selected').subscribe(
      (selected) => {
        this.filterRegional = selected;
      }
    );
    EventEmitterService.get('DimensionFilterComponent.filter').subscribe(
      (selected) => {
        this.filter = selected;
      }
    );
  }

  index() {
    if (this.dimensionList) return;

    // this.dimensionService.read().subscribe((data) => {
    //   if (data.statusMessage) {
    //     UtilService.notifying.showError(data.statusMessage, data.statusCode.toString());
    //     return;
    //   }
    //   this.dimensionList = data;
    //   this.toView();
    // });
    this.mockToView();
  }

  openDimensionFormModal(dimension: IDimension): void {
    const initialState = { dimension  }
    this.bsModalRef = this.bsModalService.show(DimensionFormComponent, { id: UtilService.getRandom9Digits(), class: 'modal-lg', initialState })
  }

  toView() {
    this.toViewDimensionList = this.dimensionList.map((i) => {
      return {
        _id: i._id,
        orderCode: i.orderCode,
        title: i.title,
        description: i.description,
      };
    });
  }

  mockToView() {
    this.toViewDimensionList = [
      {
        _id: uniqueId(),
        orderCode: '1',
        title: 'Planejamento e Avaliação Institucional',
        description: 'Esta é uma descrição ...',
      },
      {
        _id: uniqueId(),
        orderCode: '2',
        title: 'Desenvolvimento Institucional',
        description: 'Esta é uma descrição ...',
      },
    ];
  }
}
