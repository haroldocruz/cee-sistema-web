import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { SelectDrejeComponent } from 'src/app/shared/directives/select-dreje/select-dreje.component';
import { SelectInstitutionComponent } from 'src/app/shared/directives/select-institution/select-institution.component';
import { IAct } from 'src/app/interfaces/Act';
import { IInstitution, Institution } from 'src/app/interfaces/Institution';
import { IIndicator, Indicator } from 'src/app/interfaces/Indicator';
import { EventEmitterService } from 'src/app/shared/services/event-emitter.service';
import { UtilService } from 'src/app/shared/services/util.service';

interface SchemaIndicatorFormComponent {
    indicator: IIndicator;
    interestedList: IInstitution[];
    dreje: IInstitution;
}

@Component({
    selector: 'app-indicator-form',
    templateUrl: './indicator-form.component.html',
    styleUrls: ['./indicator-form.component.less']
})
export class IndicatorFormComponent implements OnInit, OnDestroy {

    private subDestroy$ = new Subject();

    @Input() public indicator: IIndicator;
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
        if (!this.indicator) this.indicator = new Indicator();

        this.isLoading = false;
    }

    create() {
        //TODO: create not implemented
    }

    update() {
        //TODO: update not implemented
    }

}
