import { Component, OnInit } from '@angular/core';
import { ProfileLocalService } from '../profile.local.service';

@Component({
  selector: 'app-profile-card-main',
  templateUrl: './profile-card-main.component.html',
  styleUrls: ['./profile-card-main.component.less']
})
export class ProfileCardMainComponent implements OnInit {

  profileLocalService = ProfileLocalService;

  constructor() { }

  ngOnInit(): void {
  }

}
