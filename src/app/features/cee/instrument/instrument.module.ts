import { IndicatorListComponent } from './indicator/indicator-list/indicator-list.component';
import { IndicatorFilterComponent } from './indicator/indicator-filter/indicator-filter.component';
import { IndicatorFormComponent } from './indicator/indicator-form/indicator-form.component';
import { IndicatorComponent } from './indicator/indicator.component';
import { DimensionListComponent } from './dimension/dimension-list/dimension-list.component';
import { DimensionFilterComponent } from './dimension/dimension-filter/dimension-filter.component';
import { DimensionFormComponent } from './dimension/dimension-form/dimension-form.component';
import { DimensionComponent } from './dimension/dimension.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { InstrumentComponent } from './instrument.component';
import { InstrumentFormComponent } from './instrument-form/instrument-form.component';
import { InstrumentViewComponent } from './instrument-view/instrument-view.component';
import { InstrumentFilterComponent } from './instrument-filter/instrument-filter.component';
import { InstrumentListComponent } from './instrument-list/instrument-list.component';

import { PipesModule } from 'w-ng5';
import { FormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';

import { UtilModule } from 'src/app/util/util.module';
import { InstrumentRoutingModule } from './instrument.routing.module';

@NgModule({
  declarations: [
    InstrumentComponent,
    InstrumentFormComponent,
    InstrumentViewComponent,
    InstrumentFilterComponent,
    InstrumentListComponent,
    DimensionComponent,
    DimensionFormComponent,
    DimensionFilterComponent,
    DimensionListComponent,
    IndicatorComponent,
    IndicatorFormComponent,
    IndicatorFilterComponent,
    IndicatorListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    InstrumentRoutingModule,

    NgxMaskModule,
    PipesModule,
    UtilModule
  ]
})
export class InstrumentModule { }
