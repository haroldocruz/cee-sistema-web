import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DocTypeEnum, IDoc } from 'src/app/interfaces/IDoc';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.less']
})
export class DocumentComponent implements OnInit {

  constructor(
    private titleService: Title
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle('CEE | Document')
  }

}
