import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvaliadorDetalharComponent } from './avaliador-detalhar/avaliador-detalhar.component';
import { AvaliadorIncluirComponent } from './avaliador-incluir/avaliador-incluir.component';
import { AvaliadorListarComponent } from './avaliador-listar/avaliador-listar.component';
import { AvaliadorComponent } from './avaliador.component';

const routes: Routes = [
    { path: '', redirectTo: 'listar', pathMatch: 'full' },
    {
        path: '', component: AvaliadorComponent, children: [
            { path: 'listar', component: AvaliadorListarComponent, title: 'Avaliador | Listar' },
            { path: 'detalhar', component: AvaliadorDetalharComponent, title: 'Avaliador | Detalhar' },
            { path: 'incluir', component: AvaliadorIncluirComponent, title: 'Avaliador | Incluir' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AvaliadorRoutingModule { }
