import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-cee-dashboard',
  templateUrl: './cee-dashboard.component.html',
  styleUrls: ['./cee-dashboard.component.less']
})
export class CeeDashboardComponent implements OnInit {

  constructor(
    private titleService: Title
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle('CEE | Dashboard')
  }

}
