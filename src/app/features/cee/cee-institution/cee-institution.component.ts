import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-cee-institution',
  templateUrl: './cee-institution.component.html',
  styleUrls: ['./cee-institution.component.less']
})
export class CeeInstitutionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    UtilService.Title.setTitle('CEE | Institution')
  }

}
