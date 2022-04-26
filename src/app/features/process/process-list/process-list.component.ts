import { Component, Input, OnInit } from '@angular/core';
import { IAct } from 'src/app/interfaces/Act';
import { IProcess } from 'src/app/interfaces/Process';
import { EventEmitterService } from 'src/app/services/event-emitter.service';
import { InstitutionService } from 'src/app/services/institution.service';
import { ProcessService } from 'src/app/services/process.service';
import { UtilService } from 'src/app/services/util.service';
import { ProcessLocalService } from '../process.local.service';

import moment from 'moment'
import { IRegional } from 'src/app/interfaces/Regional';

interface toViewProcessList {
  "_id"?: string;
  "situation"?: string;
  "sgdNumber"?: string;
  "sgdAutuationDate"?: string;
  "actName": string;
  "regionalName": string;
  "institutionName": string;
  "courseName"?: string;
  "description": string;
  "lifeTime"?: string;
}

@Component({
  selector: 'app-process-list',
  templateUrl: './process-list.component.html',
  styleUrls: ['./process-list.component.less']
})
export class ProcessListComponent implements OnInit {

  @Input() public processList: IProcess[];

  public toViewProcessList: toViewProcessList[];

  public search: string;
  public filterAct: IAct;
  public filterRegional: IRegional;

  constructor(
    public processLocalService: ProcessLocalService
  ) { }

  ngOnInit(): void {
    this.index();

    EventEmitterService.get('ActListComponent.selected').subscribe((selected) => {
      this.filterAct = selected;
    });
    EventEmitterService.get('RegionalListComponent.selected').subscribe((selected) => {
      this.filterRegional = selected;
    });
    EventEmitterService.get('ProcessFilterComponent.filter').subscribe((selected) => {
      this.search = selected;
    });
  }

  index() {
    if (this.processList) return;

    // this.processService.read().subscribe((data) => {
    //   if (data.statusMessage) {
    //     UtilService.notifying.showError(data.statusMessage, data.statusCode.toString());
    //     return;
    //   }
    //   this.processList = data;
    //   this.toView();
    // });
    this.mockToView();
  }

  toView() {
    this.toViewProcessList = this.processList.map((p) => {
      return {
        sgdNumber: p.sgd.number,
        sgdAutuationDate: p.sgd.autuationDate.toString(),
        actName: p.act.name,
        regionalName: p.act.name,
        institutionName: p._interestedList[0].name,
        // courseName: p.courseName,
        description: p.description,
        lifeTime: this.lifeTime(p.sgd.autuationDate.toString()),
      }
    });
  }

  estaEntre() {
    const start = moment().subtract(1, 'days');
    const end = new Date();
    const actual = moment().subtract(1, 'hours');
    const test = moment(actual).isBetween(start, end);
    console.log(test);
  }
  diferenca() {
    const startTime = moment('2021-01-01')
    const end = moment(new Date())
    const duration = moment.duration(end.diff(startTime));
    const hours = duration.asMonths();
    console.log(hours)

    // moment.locale(navigator.language)
    // const diff = moment().format('LLL')

    moment.locale('pt')
    const diff = moment(moment().subtract(1, 'months')).fromNow();
  }

  lifeTime(date: string): string {
    moment.locale(navigator.language)
    return moment(date).fromNow();
  }

  mockToView() {
    this.diferenca()
    this.toViewProcessList = [
      {
        situation: 'Concluído',
        sgdNumber: '2021/27000/009190',
        sgdAutuationDate: '15/06/2021',
        actName: 'Credenciamento',
        regionalName: 'Araguatins',
        institutionName: 'Instituto Renascer',
        // courseName: '',
        description: 'Credenciamento do Instituto Renascer, no município de Araguatins',
        lifeTime: this.lifeTime('2021-06-15'),
      },
      {
        situation: 'Concluído',
        sgdNumber: '2021/27000/009191',
        sgdAutuationDate: '15/06/2021',
        actName: 'Autorização para Funcionamento',
        regionalName: 'Araguatins',
        institutionName: 'Instituto Renascer',
        courseName: 'Técnico em Enfermagem',
        description: 'Autorização para funcionamento do curso Técnico em Enfermagem, do Instituto Renascer, no município de Araguatins',
        lifeTime: this.lifeTime('2021-06-15'),
      },
      {
        situation: 'Aberto',
        sgdNumber: '2021/27000/009192',
        sgdAutuationDate: '01/12/2021',
        actName: 'Renovação de reconhecimento',
        regionalName: 'Palmas',
        institutionName: 'Instituto Liberdade',
        courseName: 'Técnico em Edifcações',
        description: 'Autorização para funcionamento do curso Técnico em Enfermagem, do Instituto Renascer, no município de Araguatins',
        lifeTime: this.lifeTime('2021-12-01 08:23'),
      },
    ]
  }

}
