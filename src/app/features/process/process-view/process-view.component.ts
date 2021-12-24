import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-process-view',
  templateUrl: './process-view.component.html',
  styleUrls: ['./process-view.component.less']
})
export class ProcessViewComponent implements OnInit {

  timestamp = new Date().getTime()

  constructor() { }

  ngOnInit(): void {
  }

}
