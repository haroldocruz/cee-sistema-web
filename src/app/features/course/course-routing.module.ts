import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from './course.component';

const CourseRouting: Routes = [
  { path: "", component: CourseComponent },
];

@NgModule({
  imports: [RouterModule.forChild(CourseRouting)],
  exports: [RouterModule]
})
export class CourseRoutingModule { }
