import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaesbInscricaoFormComponent } from './baesb-inscricao/baesb-inscricao-form/baesb-inscricao-form.component';

import { BaesbInscricaoComponent } from './baesb-inscricao/baesb-inscricao.component';
import { BaesbComponent } from './baesb.component';

const routes: Routes = [
    { path: "", redirectTo: "inscricao", pathMatch: "full" },
    {
        path: "", component: BaesbComponent, children: [
            {
                path: "inscricao", component: BaesbInscricaoComponent, children: [
                    { path: 'form', component: BaesbInscricaoFormComponent },
                ]
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BaesbRoutingModule { }
