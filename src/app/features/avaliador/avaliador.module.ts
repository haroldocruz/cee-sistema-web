import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AvaliadorRoutingModule } from './avaliador-routing.module';
import { AvaliadorListarComponent } from './avaliador-listar/avaliador-listar.component';
import { AvaliadorComponent } from './avaliador.component';
import { AvaliadorDetalharComponent } from './avaliador-detalhar/avaliador-detalhar.component';
import { AvaliadorIncluirComponent } from './avaliador-incluir/avaliador-incluir.component';
import { FormsModule } from '@angular/forms';
import { UtilModule } from 'src/app/util/util.module';


@NgModule({
    declarations: [
        AvaliadorListarComponent,
        AvaliadorComponent,
        AvaliadorDetalharComponent,
        AvaliadorIncluirComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        AvaliadorRoutingModule,

        UtilModule
    ]
})
export class AvaliadorModule { }
