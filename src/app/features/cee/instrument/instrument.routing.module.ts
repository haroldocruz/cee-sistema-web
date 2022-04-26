import { IndicatorFormComponent } from './indicator/indicator-form/indicator-form.component';
import { IndicatorComponent } from './indicator/indicator.component';
import { DimensionFormComponent } from './dimension/dimension-form/dimension-form.component';
import { DimensionComponent } from './dimension/dimension.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstrumentComponent } from './instrument.component';
import { InstrumentFormComponent } from './instrument-form/instrument-form.component';
import { InstrumentViewComponent } from './instrument-view/instrument-view.component';

const routes: Routes = [
  { path: '', component: InstrumentComponent },
  { path: 'form', component: InstrumentFormComponent },
  { path: 'view', component: InstrumentViewComponent },
  {
    path: 'dimension',
    children: [
      {
        path: '',
        component: DimensionComponent,
        children: [
          { path: 'form', component: DimensionFormComponent },
          // { path: 'view', component: DimensionViewComponent },
        ],
      },
    ],
  },
  {
    path: 'indicator',
    children: [
      {
        path: '',
        component: IndicatorComponent,
        children: [
          { path: 'form', component: IndicatorFormComponent },
          // { path: 'view', component: IndicatorViewComponent },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InstrumentRoutingModule {}
