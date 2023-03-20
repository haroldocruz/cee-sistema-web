import { UtilService } from 'src/app/shared/services/util.service';
import { takeUntil } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { Instrument } from 'src/app/interfaces/Instrument';
import { Subject } from 'rxjs';
import { IInstrument } from 'src/app/interfaces/Instrument';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { groupBy, uniqueId } from 'lodash';

interface IInstrumentTemplate {
    _id?: string;
    orderCode?: string;
    title?: string;
    description?: string;
    act?: string; //Enum
    _dimensionList?: IDimensionTemplate[];
}

interface IIndicatorTemplate {
    _id: string;
    orderCode: string;
    title: string;
    description: string;
    justify?: string;
    evidenceList?: {}[];
    _dimension?: { _id: string };
    _criteryList?: {}[];
}

interface IDimensionTemplate {
    _id: string;
    orderCode: string;
    title: string;
    description: string;
    _indicatorList?: IIndicatorTemplate[];
}

@Component({
    selector: 'app-instrument-view',
    templateUrl: './instrument-view.component.html',
    styleUrls: ['./instrument-view.component.less'],
})
export class InstrumentViewComponent implements OnInit, OnDestroy {
    private subDestroy$ = new Subject();
    public isLoading: boolean;

    @Input() private instrument: IInstrument;
    @Input() private instrumentId: String;

    public instrumentTemplate: IInstrumentTemplate;
    public indicatorTemplateList: IIndicatorTemplate[];

    public filter: string;

    constructor(private route: ActivatedRoute) { }

    ngOnDestroy(): void {
        this.subDestroy$.next();
        this.subDestroy$.complete();
    }

    ngOnInit(): void {
        UtilService.Title.setTitle('CEE | Instrument | View');


        this.instrumentTemplate = {
            _id: uniqueId(),
            orderCode: '1',
            title: 'Instrumento para o ato de Credenciamento',
            description: 'Esta é uma descrição ...',
            act: 'Credenciamento',
            _dimensionList: []
        };

        this.index();
    }

    async index() {
        if (this.instrument) return;

        this.route.queryParams.subscribe((params) => {
            this.instrumentId = params['instrumentId'];

            if (!this.instrumentId) return;

            // this.isLoading = true;
            // this.instrumentService.readById(this.instrumentId)
            //   .pipe(takeUntil(this.subDestroy$))
            //   .subscribe((data) => {
            //     this.isLoading = false;
            //     if (data.statusCode) {
            //       //TODO: not implemented
            //       return;
            //     }

            //     this.institution = data;
            //     this.toView(data);
            //   });
        });

        // this.instrumentService.read().subscribe((data) => {
        //   if (data.statusMessage) {
        //     UtilService.notifying.showError(data.statusMessage, data.statusCode.toString());
        //     return;
        //   }
        //   this.instrumentList = data;
        //   this.toView();
        // });
        this.instrumentTemplate._dimensionList = await this.mockToView(this.instrument);
        // console.log(
        //   'this.instrumentTemplate._dimensionList',
        //   this.instrumentTemplate._dimensionList
        // );
    }

    private parseToView() { }

    private toView(i) {
        this.instrumentTemplate = {
            _id: i._id,
            orderCode: i.orderCode,
            title: i.title,
            description: i.description,
            act: i.act,
        };
    }

    private mockToView(i) {

        const id1 = uniqueId();
        const id2 = uniqueId();

        const dimensionList = [
            {
                _id: id1,
                orderCode: '1',
                title: 'Planejamento e Avaliação Institucional',
                description: 'Esta é uma descrição ...',
            },
            {
                _id: id2,
                orderCode: '2',
                title: 'Desenvolvimento Institucional',
                description: 'Esta é uma descrição ...',
            },
        ];

        const indicatorList = [
            {
                _id: uniqueId(),
                orderCode: '1',
                title: 'Projeto de autoavaliação institucional',
                description: 'Esta é uma descrição ...',
                justify: 'Justificativa do indicador',
                evidenceList: [{ url: 'url da evidência' }],
                _dimension: {
                    _id: id1,
                },
                _criteryList: [
                    {
                        _id: uniqueId(),
                        orderCode: '1',
                        title: 'Não há projeto de autoavaliação institucional.',
                        description: 'Esta é uma descrição ...',
                    },
                    {
                        _id: uniqueId(),
                        orderCode: '2',
                        title:
                            'Há projeto de autoavaliação institucional, mas não atende às necessidades institucionais, como instrumento de gestão e de ação acadêmico-administrativa de melhoria institucional.',
                        description: 'Esta é uma descrição ...',
                    },
                ],
            },
            {
                _id: uniqueId(),
                orderCode: '2',
                title:
                    'Autoavaliação institucional: participação da comunidade acadêmica',
                description: 'Esta é uma descrição ...',
                justify: 'Justificativa do indicador',
                evidenceList: [{ url: 'url da evidência' }],
                _dimension: {
                    _id: id1,
                },
                _criteryList: [
                    {
                        _id: uniqueId(),
                        orderCode: '1',
                        title: 'Não há projeto de autoavaliação institucional.',
                        description: 'Esta é uma descrição ...',
                    },
                    {
                        _id: uniqueId(),
                        orderCode: '2',
                        title:
                            'O projeto de autoavaliação institucional não prevê participação da sociedade civil organizada e de todos os segmentos da comunidade acadêmica.',
                        description: 'Esta é uma descrição ...',
                    },
                ],
            },
            {
                _id: uniqueId(),
                orderCode: '3',
                title:
                    'Autoavaliação institucional: participação da comunidade acadêmica',
                description: 'Esta é uma descrição ...',
                justify: 'Justificativa do indicador',
                evidenceList: [{ url: 'url da evidência' }],
                // _dimension: {
                //   _id: uniqueId(),
                // },
                _criteryList: [
                    {
                        _id: uniqueId(),
                        orderCode: '1',
                        title: 'Não há projeto de autoavaliação institucional.',
                        description: 'Esta é uma descrição ...',
                    },
                    {
                        _id: uniqueId(),
                        orderCode: '2',
                        title:
                            'O projeto de autoavaliação institucional não prevê participação da sociedade civil organizada e de todos os segmentos da comunidade acadêmica.',
                        description: 'Esta é uma descrição ...',
                    },
                ],
            },
            {
                _id: uniqueId(),
                orderCode: '4',
                title:
                    'Autoavaliação institucional: participação da comunidade acadêmica',
                description: 'Esta é uma descrição ...',
                justify: 'Justificativa do indicador',
                evidenceList: [{ url: 'url da evidência' }],
                _dimension: {
                    _id: id2,
                },
                _criteryList: [
                    {
                        _id: uniqueId(),
                        orderCode: '1',
                        title: 'Não há projeto de autoavaliação institucional.',
                        description: 'Esta é uma descrição ...',
                    },
                    {
                        _id: uniqueId(),
                        orderCode: '2',
                        title:
                            'O projeto de autoavaliação institucional não prevê participação da sociedade civil organizada e de todos os segmentos da comunidade acadêmica.',
                        description: 'Esta é uma descrição ...',
                    },
                ],
            },
        ];

        return this.mapInstrument(indicatorList, dimensionList);
    }

    private mapInstrument(
        indicatorList: IIndicatorTemplate[],
        dimensionList: IDimensionTemplate[]
    ): IDimensionTemplate[] {

        for (let indicator of indicatorList) {

            for (let [idx, dimension] of dimensionList.entries()) {

                if (indicator._dimension?._id == dimension._id) {
                    if (!dimension._indicatorList) dimension._indicatorList = [];
                    dimension._indicatorList.push(indicator);
                    break;
                }
            }
        }
        return dimensionList;
        // const group = groupBy(indicatorTemplateList, '_dimension.title');
        // console.log('group', group);
        // const keys = Object.keys(group);
        // console.log('keys', keys);
        // const mapi = Object.assign(group, { keys: keys });
        // console.log('mapi', mapi);
        // return mapi;
    }
}
