import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SorteadorComponent } from './sorteador.component';
import { TwoComponent } from './two/two.component';
import { OneComponent } from './one/one.component';



@NgModule({
  declarations: [SorteadorComponent, OneComponent, TwoComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SorteadorModule { }
