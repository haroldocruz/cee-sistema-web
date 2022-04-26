import { UtilService } from 'src/app/services/util.service';
import { Component, OnInit } from '@angular/core';
import { IIndicator } from 'src/app/interfaces/Indicator';

@Component({
  selector: 'app-indicator',
  templateUrl: './indicator.component.html',
  styleUrls: ['./indicator.component.less']
})
export class IndicatorComponent implements OnInit {

  public indicatorList: IIndicator[];

  constructor() { }

  ngOnInit(): void {
    UtilService.Title.setTitle('CEE | Indicator');
  }

}
