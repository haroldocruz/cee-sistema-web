import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentComponent } from './document.component';

const DocumentRouting: Routes = [
  { path: "", component: DocumentComponent },
];

@NgModule({
  imports: [RouterModule.forChild(DocumentRouting)],
  exports: [RouterModule]
})
export class DocumentRoutingModule { }
