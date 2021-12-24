import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sd-ribbon',
  templateUrl: './ribbon.component.html',
  styleUrls: ['./ribbon.component.less']
})
export class RibbonComponent implements OnInit {

  @Input() text: string = 'Prototype';
  @Input() textLength: 'xs' | 'sm' | 'md' | 'lg' = 'sm';
  @Input() length: 'lg' | 'xl' = 'lg';
  @Input() color: string = 'warning';

  constructor() { }

  ngOnInit(): void {
  }

}
