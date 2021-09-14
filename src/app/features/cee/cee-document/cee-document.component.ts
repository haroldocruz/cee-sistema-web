import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DocTypeEnum, IDoc } from 'src/app/interfaces/IDoc';

@Component({
  selector: 'app-cee-document',
  templateUrl: './cee-document.component.html',
  styleUrls: ['./cee-document.component.less']
})
export class CeeDocumentComponent implements OnInit {

  constructor(
    private titleService: Title
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle('CEE | Document')
  }

}
