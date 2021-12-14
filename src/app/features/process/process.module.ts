import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProcessComponent } from './process.component';
import { ProcessFormComponent } from './process-form/process-form.component';
import { ProcessViewComponent } from './process-view/process-view.component';
import { ProcessFilterComponent } from './process-filter/process-filter.component';
import { ProcessListComponent } from './process-list/process-list.component';

import { PipesModule } from 'w-ng5';
import { FormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { UtilModule } from 'src/app/util/util.module';
import { ProcessRoutingModule } from './process.routing.module';

@NgModule({
  declarations: [
    ProcessComponent,
    ProcessFormComponent,
    ProcessViewComponent,
    ProcessFilterComponent,
    ProcessListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ProcessRoutingModule,

    NgxMaskModule,
    PipesModule,
    UtilModule
  ]
})
export class ProcessModule { }
