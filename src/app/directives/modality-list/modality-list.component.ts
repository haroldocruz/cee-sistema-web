import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ModalityEnum } from 'src/app/interfaces/enumerations/ModalityEnum';
import { EventEmitterService } from 'src/app/services/event-emitter.service';

interface SchemaModalityListComponent {
}

@Component({
  selector: 'app-modality-list',
  templateUrl: './modality-list.component.html',
  styleUrls: ['./modality-list.component.less']
})
export class ModalityListComponent implements OnInit {

  @Input() modalityList: string[];

  constructor(
    public bsModalRef: BsModalRef,
  ) { }

  ngOnInit(): void {
    if (!this.modalityList) this.modalityList = Object.values(ModalityEnum);
  }

  index() { }

  selected(modality: string): void {

    EventEmitterService.get('ModalityListComponent.selected').emit(modality);

    if (this.bsModalRef)
      this.bsModalRef.hide();
  }

}
