import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-cee-home',
  templateUrl: './cee-home.component.html',
  styleUrls: ['./cee-home.component.less']
})
export class CeeHomeComponent implements OnInit {

  constructor(
    private titleService: Title
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle('CEE | Home')
  }

}
