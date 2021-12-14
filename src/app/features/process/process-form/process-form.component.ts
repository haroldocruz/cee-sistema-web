import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { SelectDrejeComponent } from 'src/app/directives/select-dreje/select-dreje.component';
import { SelectInstitutionComponent } from 'src/app/directives/select-institution/select-institution.component';
import { ActList, IAct } from 'src/app/interfaces/Act';
import { IInstitution, Institution } from 'src/app/interfaces/Institution';
import { IProcess, Process } from 'src/app/interfaces/Process';
import { EventEmitterService } from 'src/app/services/event-emitter.service';
import { UtilService } from 'src/app/services/util.service';

interface SchemaProcessFormComponent {
  process: IProcess;
  interestedList: IInstitution[];
  dreje: IInstitution;
}

@Component({
  selector: 'app-process-form',
  templateUrl: './process-form.component.html',
  styleUrls: ['./process-form.component.less']
})
export class ProcessFormComponent implements OnInit, OnDestroy {

  private subDestroy$ = new Subject();

  @Input() public process: IProcess;
  @Input() public interestedList: IInstitution[];
  @Input() public dreje: IInstitution;

  public drejeList: IInstitution[];

  private bsModalRef_Interested: BsModalRef;
  private bsModalRef_Dreje: BsModalRef;

  public isLoading: boolean;

  public actList: IAct[];

  constructor(
    public bsModalRef: BsModalRef,
    private bsModalService: BsModalService
  ) { }

  ngOnDestroy(): void {
    this.subDestroy$.next();
    this.subDestroy$.complete();
  }

  ngOnInit(): void {
    if (!this.process) this.process = new Process();
    if (!this.interestedList) this.interestedList = [];

    this.isLoading = false;
    this.actList = ActList;

    EventEmitterService.get('SelectInstitutionComponent.selected')
      .pipe(takeUntil(this.subDestroy$))
      .subscribe((institution) => {
        this.interestedList.push(institution);
      });

    EventEmitterService.get('SelectDrejeComponent.selected')
      .pipe(takeUntil(this.subDestroy$))
      .subscribe((dreje) => {
        this.process._dreje = dreje;
      });
  }

  public openSelectInstitutionModal() {
    this.bsModalRef_Interested = this.bsModalService.show(SelectInstitutionComponent, { id: UtilService.getRandom9Digits(), class: 'modal-lg' });
  }

  public openSelectDrejeModal() {
    //TODO: implement SelectDrejeComponent
    this.bsModalRef_Dreje = this.bsModalService.show(SelectDrejeComponent, { id: UtilService.getRandom9Digits(), class: 'modal-lg' });
  }

  removeInterested(index: number) {
    if (!UtilService.isConfirm('Deseja removê-lo?')) return;

    this.interestedList.splice(index);
    UtilService.notifying.showSuccess();
  }

  create() {
    //TODO: create not implemented
  }

  update() {
    //TODO: update not implemented
  }

}
