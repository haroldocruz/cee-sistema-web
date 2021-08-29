
import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sorteador',
  templateUrl: './sorteador.component.html',
  styleUrls: ['./sorteador.component.less'],
  animations: [
    trigger(
      'inOutAnimation',
      [
        transition(
          ':enter',
          [
            style({ opacity: 0 }),
            animate('5s ease-out',
              style({ opacity: 1 }))
          ]
        ),
        transition(
          ':leave',
          [
            style({ opacity: 1 }),
            animate('5s ease-in',
              style({ opacity: 0 }))
          ]
        )
      ]
    )
  ]
})
export class SorteadorComponent implements OnInit {

  ngOnInit(): void {

  }

}
