import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { EventEmitterService } from 'src/app/shared/services/event-emitter.service';

export interface SchemaAnyEnumComponent {
    title: string;
    anyEnum: string[];
}

@Component({
    selector: 'app-any-enum',
    templateUrl: './any-enum.component.html',
    styleUrls: ['./any-enum.component.less']
})
export class AnyEnumComponent implements OnInit {

    @Input() title: string;
    @Input() anyEnum: string[];

    constructor(
        public bsModalRef: BsModalRef,
    ) { }

    ngOnInit(): void {
        if (!this.anyEnum) this.anyEnum = [];
    }

    index() { }

    selected(anyEnum: string): void {

        EventEmitterService.get('AnyEnumComponent.selected').emit(anyEnum);

        if (this.bsModalRef)
            this.bsModalRef.hide();
    }

}
