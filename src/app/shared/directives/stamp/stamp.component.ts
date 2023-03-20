import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sd-stamp',
  templateUrl: './stamp.component.html',
  styleUrls: ['./stamp.component.less']
})
export class StampComponent implements OnInit {

  @Input() text: string;

  constructor() { }

  ngOnInit(): void {
  }

}
