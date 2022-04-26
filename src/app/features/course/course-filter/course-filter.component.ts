import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AnyEnumComponent, SchemaAnyEnumComponent } from 'src/app/directives/any-enum/any-enum.component';
import { EventEmitterService } from 'src/app/services/event-emitter.service';
import { UtilService } from 'src/app/services/util.service';
import { CourseFormComponent } from '../course-form/course-form.component';
import { CourseLocalService } from '../course.local.service';
import { ModalityEnum } from 'src/app/interfaces/enumerations/ModalityEnum';

@Component({
  selector: 'app-course-filter',
  templateUrl: './course-filter.component.html',
  styleUrls: ['./course-filter.component.less']
})
export class CourseFilterComponent implements OnInit {

  public modality: string = "";

  public search: string;
  private searchTimeout: any;

  public bsModalRef: BsModalRef;

  constructor(
    private bsModalService: BsModalService,
    private courseLocalService: CourseLocalService
  ) { }

  ngOnInit(): void {
  }

  changeSearch(): void {
    clearTimeout(this.searchTimeout);
    this.searchTimeout = setTimeout(() => {
      EventEmitterService.get('CourseFilterComponent.filter').emit(this.search);
    }, 600);
  }

  openCourseFormModal(): void {
    this.bsModalRef = this.bsModalService.show(CourseFormComponent, { id: UtilService.getRandom9Digits(), class: 'modal-lg', initialState: null })
  }

  openModalityListModal(): void {
    const initialState: SchemaAnyEnumComponent = { title: "Modalidade", anyEnum: Object.values(ModalityEnum) };
    this.bsModalRef = this.bsModalService.show(AnyEnumComponent, { id: UtilService.getRandom9Digits(), class: 'modal-md', initialState: initialState })
    EventEmitterService.get('AnyEnumComponent.selected').subscribe((selected) => {
      this.modality = selected;
    })
  }

  refresh() {
    EventEmitterService.get('is-success').emit(true);
  }

}
