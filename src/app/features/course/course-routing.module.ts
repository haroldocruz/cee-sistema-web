import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseFormComponent } from './course-form/course-form.component';
import { CourseComponent } from './course.component';

const CourseRouting: Routes = [
  { path: "", component: CourseComponent },
  { path: "form", component: CourseFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(CourseRouting)],
  exports: [RouterModule]
})
export class CourseRoutingModule { }
