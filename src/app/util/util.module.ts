import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { IsLoadingComponent } from '../directives/is-loading/is-loading.component';
import { PageInConstructionComponent } from '../directives/page-in-construction/page-in-construction.component';
import { ProfileCardComponent } from '../directives/profile-card/profile-card.component';
import { SelectDrejeComponent } from '../directives/select-dreje/select-dreje.component';
import { SelectInstitutionComponent } from '../directives/select-institution/select-institution.component';
import { EvidenceFormComponent } from '../directives/evidence-form/evidence-form.component';
import { SortByPipe } from '../pipes/sort-by.pipe';
import { StampComponent } from '../directives/stamp/stamp.component';
import { RibbonComponent } from '../directives/ribbon/ribbon.component';



@NgModule({
  declarations: [
    SortByPipe,

    EvidenceFormComponent,
    IsLoadingComponent,
    PageInConstructionComponent,
    ProfileCardComponent,
    RibbonComponent,
    SelectDrejeComponent,
    SelectInstitutionComponent,
    StampComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxMaskModule
  ],
  exports: [
    SortByPipe,
    
    EvidenceFormComponent,
    IsLoadingComponent,
    PageInConstructionComponent,
    ProfileCardComponent,
    RibbonComponent,
    SelectDrejeComponent,
    SelectInstitutionComponent,
    StampComponent
  ]
})
export class UtilModule { }
