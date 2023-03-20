import { ModalityEnum } from './../../../../interfaces/enumerations/ModalityEnum';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { SelectDrejeComponent } from 'src/app/shared/directives/select-dreje/select-dreje.component';
import { SelectInstitutionComponent } from 'src/app/shared/directives/select-institution/select-institution.component';
import { IAct } from 'src/app/interfaces/Act';
import { IInstitution, Institution } from 'src/app/interfaces/Institution';
import { IInstrument, Instrument } from 'src/app/interfaces/Instrument';
import { EventEmitterService } from 'src/app/shared/services/event-emitter.service';
import { UtilService } from 'src/app/shared/services/util.service';

interface SchemaInstrumentFormComponent {
    instrument: IInstrument;
    interestedList: IInstitution[];
    dreje: IInstitution;
}

@Component({
    selector: 'app-instrument-form',
    templateUrl: './instrument-form.component.html',
    styleUrls: ['./instrument-form.component.less']
})
export class InstrumentFormComponent implements OnInit, OnDestroy {

    private subDestroy$ = new Subject();

    @Input() public instrument: IInstrument;
    public actList: IAct[];

    public isLoading: boolean;

    constructor(
        public bsModalRef: BsModalRef,
        private bsModalService: BsModalService
    ) { }

    ngOnDestroy(): void {
        this.subDestroy$.next();
        this.subDestroy$.complete();
    }

    ngOnInit(): void {
        if (!this.instrument) this.instrument = new Instrument();

        this.isLoading = false;
    }

    create() {
        //TODO: create not implemented
    }

    update() {
        //TODO: update not implemented
    }

}
