import { Component, Input, OnInit } from '@angular/core';
import moment from 'moment';
import { IAct } from 'src/app/interfaces/Act';
import { IProcess } from 'src/app/interfaces/Process';
import { IRegional } from 'src/app/interfaces/Regional';
import { EventEmitterService } from 'src/app/shared/services/event-emitter.service';
import { ProcessLocalService } from '../../process/process.local.service';

@Component({
    selector: 'app-avaliador-listar',
    templateUrl: './avaliador-listar.component.html',
    styleUrls: ['./avaliador-listar.component.less']
})
export class AvaliadorListarComponent implements OnInit {

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
                evaluatorName: p._interestedList[0].name,
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
                situation: 'Habilitado',
                evaluatorName: 'Maria de Jesus Rocha Pereira',
                formationName: 'Bacharel em Direito',
                lifeTime: this.lifeTime('2021-06-15'),
                description: 'Alguma descrição sobre o avaliador',

                sgdNumber: '2021/27000/009190',
                integrationDate: '15/06/2021',
                actName: 'Credenciamento',
                regionalName: 'Araguatins',
            },
            {
                situation: 'Habilitado',
                evaluatorName: 'Ana Olga da Cruz Bomfim',
                formationName: 'Tecnóloga em Sistemas de Informação',
                lifeTime: this.lifeTime('2022-12-15'),
                description: 'Alguma descrição sobre o avaliador',

                sgdNumber: '2021/27000/009190',
                integrationDate: '15/06/2021',
                actName: 'Credenciamento',
                regionalName: 'Araguatins',
            },
            {
                situation: 'Habilitado',
                evaluatorName: 'José Washington Santos Lima',
                formationName: 'Licenciado em matemática',
                lifeTime: this.lifeTime('2021-06-15'),
                description: 'Alguma descrição sobre o avaliador',

                sgdNumber: '2021/27000/009190',
                integrationDate: '15/06/2021',
                actName: 'Credenciamento',
                regionalName: 'Araguatins',
            },
        ]
    }

}

interface toViewProcessList {
    _id?: string;
    situation?: string;
    sgdNumber?: string;
    integrationDate?: string;
    actName: string;
    regionalName: string;
    evaluatorName: string;
    formationName?: string;
    description: string;
    lifeTime?: string;
}
