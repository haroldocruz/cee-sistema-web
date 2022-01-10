import { Component, Input, OnInit } from '@angular/core';

export interface IRibbonComponentTemplate {
  text?: string;
  textLength?: 'xs' | 'sm' | 'md' | 'lg';
  length?: 'lg' | 'xl';
  color?: string;
}

@Component({
  selector: 'sd-ribbon',
  templateUrl: './ribbon.component.html',
  styleUrls: ['./ribbon.component.less']
})
export class RibbonComponent implements OnInit {

  @Input() ribbon: IRibbonComponentTemplate = {
    text: 'Prototype',
    textLength: 'sm',
    length: 'lg',
    color: 'warning',
  }

  constructor() { }

  ngOnInit(): void {
  }

}
