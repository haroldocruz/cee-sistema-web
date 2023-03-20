import { UtilService } from 'src/app/shared/services/util.service';
import { Component, OnInit } from '@angular/core';
import { IInstrument } from 'src/app/interfaces/Instrument';

@Component({
    selector: 'app-instrument',
    templateUrl: './instrument.component.html',
    styleUrls: ['./instrument.component.less']
})
export class InstrumentComponent implements OnInit {

    public instrumentList: IInstrument[];

    constructor() { }

    ngOnInit(): void {
        UtilService.Title.setTitle('CEE | Instrument');
    }

}
