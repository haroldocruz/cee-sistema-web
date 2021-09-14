import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-cee-institution',
  templateUrl: './cee-institution.component.html',
  styleUrls: ['./cee-institution.component.less']
})
export class CeeInstitutionComponent implements OnInit {

  constructor(
    private titleService: Title
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle('CEE | Institution')
  }

}
