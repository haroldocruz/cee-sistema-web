import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-cee-dashboard',
  templateUrl: './cee-dashboard.component.html',
  styleUrls: ['./cee-dashboard.component.less']
})
export class CeeDashboardComponent implements OnInit {
  title
  type
  data
  columnNames
  options
  width
  height
  constructor(
    private titleService: Title
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle('CEE | Dashboard')
  }

  index() {
    this.title = 'Browser market shares at a specific website, 2014';
    this.type = 'PieChart';
    this.data = [
      ['Firefox', 45.0],
      ['IE', 26.8],
      ['Chrome', 12.8],
      ['Safari', 8.5],
      ['Opera', 6.2],
      ['Others', 0.7]
    ];
    this.columnNames = ['Browser', 'Percentage'];
    this.options = {
      pieHole: 0.4
    };
    this.width = 550;
    this.height = 400;
  }
}
