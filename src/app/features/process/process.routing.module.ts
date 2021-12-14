import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProcessComponent } from './process.component';
import { ProcessFormComponent } from './process-form/process-form.component';
import { ProcessViewComponent } from './process-view/process-view.component';

const routes: Routes = [
  { path: "", component: ProcessComponent },
  { path: "form", component: ProcessFormComponent },
  { path: "view", component: ProcessViewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProcessRoutingModule { }
