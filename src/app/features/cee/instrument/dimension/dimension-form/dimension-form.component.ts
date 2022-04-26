import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';
import { IAct } from 'src/app/interfaces/Act';
import { IInstitution, Institution } from 'src/app/interfaces/Institution';
import { IDimension, Dimension } from 'src/app/interfaces/Dimension';

interface SchemaDimensionFormComponent {
  dimension: IDimension;
  interestedList: IInstitution[];
  dreje: IInstitution;
}

@Component({
  selector: 'app-dimension-form',
  templateUrl: './dimension-form.component.html',
  styleUrls: ['./dimension-form.component.less']
})
export class DimensionFormComponent implements OnInit, OnDestroy {

  private subDestroy$ = new Subject();

  @Input() public dimension: IDimension;
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
    if (!this.dimension) this.dimension = new Dimension();

    this.isLoading = false;
  }

  create() {
    //TODO: create not implemented
  }

  update() {
    //TODO: update not implemented
  }

}
