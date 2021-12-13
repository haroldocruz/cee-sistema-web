import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { SorteadorComponent } from './sorteador.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const SorteadorRouting: Routes = [
  { path: "", redirectTo: "one", pathMatch: "full" },
  {
    path: "", component: SorteadorComponent,
    children: [
      { path: "one", component: OneComponent },
      { path: "two", component: TwoComponent }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(SorteadorRouting)],
  exports: [RouterModule]
})
export class SorteadorRoutingModule { }
