import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaesbComponent } from './baesb.component';
import { BaesbInscricaoComponent } from './baesb-inscricao/baesb-inscricao.component';
import { FormsModule } from '@angular/forms';
import { BaesbRoutingModule } from './baesb-routing.module';
import { BaesbInscricaoFormComponent } from './baesb-inscricao/baesb-inscricao-form/baesb-inscricao-form.component';



@NgModule({
    declarations: [
        BaesbComponent,
        BaesbInscricaoComponent,
        BaesbInscricaoFormComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        BaesbRoutingModule
    ]
})
export class BaesbModule { }
