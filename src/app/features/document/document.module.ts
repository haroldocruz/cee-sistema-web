import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PipesModule } from 'w-ng5';

import { DocumentRoutingModule } from './document-routing.module';
import { DocumentComponent } from './document.component';
import { DocumentFilterComponent } from './document-filter/document-filter.component';
import { DocumentListComponent } from './document-list/document-list.component';
import { DocumentViewComponent } from './document-view/document-view.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxMaskModule } from 'ngx-mask';

import { UtilModule } from 'src/app/util/util.module';


@NgModule({
  declarations: [

    DocumentComponent,
    DocumentFilterComponent,
    DocumentListComponent,
    DocumentViewComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    DocumentRoutingModule,
    
    PipesModule,
    // NgxChartsModule,
    // NgxMaskModule.forChild(),

    UtilModule,
    
  ]
})
export class DocumentModule { }
