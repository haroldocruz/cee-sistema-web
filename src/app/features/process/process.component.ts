import { Component, OnInit } from '@angular/core';
import { IProcess } from 'src/app/interfaces/Process';

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.less']
})
export class ProcessComponent implements OnInit {

  public processList: IProcess[];

  constructor() { }

  ngOnInit(): void {
  }

}
