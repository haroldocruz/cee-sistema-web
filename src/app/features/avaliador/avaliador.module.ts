import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AvaliadorRoutingModule } from './avaliador-routing.module';
import { AvaliadorListarComponent } from './avaliador-listar/avaliador-listar.component';
import { AvaliadorComponent } from './avaliador.component';
import { AvaliadorDetalharComponent } from './avaliador-detalhar/avaliador-detalhar.component';
import { AvaliadorIncluirComponent } from './avaliador-incluir/avaliador-incluir.component';
import { FormsModule } from '@angular/forms';
import { UtilModule } from 'src/app/util/util.module';
import { NgxMaskModule } from 'ngx-mask';
import { AvaliadorDetalharDialogComponent } from './avaliador-detalhar-dialog/avaliador-detalhar-dialog.component';


@NgModule({
    declarations: [
        AvaliadorListarComponent,
        AvaliadorComponent,
        AvaliadorDetalharComponent,
        AvaliadorIncluirComponent,
        AvaliadorDetalharDialogComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        AvaliadorRoutingModule,

        NgxMaskModule,

        UtilModule
    ]
})
export class AvaliadorModule { }
