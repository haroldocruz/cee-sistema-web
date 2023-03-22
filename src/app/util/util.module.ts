import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgxDropzoneModule } from 'ngx-dropzone';
import { NgxMaskModule } from 'ngx-mask';

import { IsLoadingComponent } from '../shared/directives/is-loading/is-loading.component';
import { PageInConstructionComponent } from '../shared/directives/page-in-construction/page-in-construction.component';
import { ProfileCardComponent } from '../shared/directives/profile-card/profile-card.component';
import { SelectDrejeComponent } from '../shared/directives/select-dreje/select-dreje.component';
import { SelectInstitutionComponent } from '../shared/directives/select-institution/select-institution.component';
import { EvidenceFormComponent } from '../shared/directives/evidence-form/evidence-form.component';
import { SortByPipe } from '../shared/pipes/sort-by.pipe';
import { StampComponent } from '../shared/directives/stamp/stamp.component';
import { RibbonComponent } from '../shared/directives/ribbon/ribbon.component';
import { UploadComponent } from '../shared/directives/upload/upload.component';
import { PageTitleComponent } from '../shared/directives/page-title/page-title.component';
import { GoBackDirective } from '../shared/directives/go-back.directive';
import { UninformedPipe } from '../shared/pipes/uninformed.pipe';



@NgModule({
    declarations: [
        EvidenceFormComponent,
        IsLoadingComponent,
        PageInConstructionComponent,
        PageTitleComponent,
        ProfileCardComponent,
        RibbonComponent,
        SelectDrejeComponent,
        SelectInstitutionComponent,
        StampComponent,
        UploadComponent,

        GoBackDirective,

        SortByPipe,
        UninformedPipe
    ],
    imports: [
        CommonModule,
        FormsModule,
        NgxDropzoneModule,
        NgxMaskModule
    ],
    exports: [
        EvidenceFormComponent,
        IsLoadingComponent,
        PageInConstructionComponent,
        PageTitleComponent,
        ProfileCardComponent,
        RibbonComponent,
        SelectDrejeComponent,
        SelectInstitutionComponent,
        StampComponent,
        UploadComponent,

        GoBackDirective,

        SortByPipe,
        UninformedPipe
    ]
})
export class UtilModule { }
