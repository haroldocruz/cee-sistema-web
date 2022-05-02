import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { CourseViewComponent } from './course-view/course-view.component';
import { CourseComponent } from './course.component';
import { CourseFilterComponent } from './course-filter/course-filter.component';
import { CourseRoutingModule } from './course-routing.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CourseComponent,
    CourseFilterComponent,
    CourseListComponent,
    CourseFormComponent,
    CourseViewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    CourseRoutingModule
  ]
})
export class CourseModule { }
