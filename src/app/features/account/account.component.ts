import { Component, OnInit } from '@angular/core';
import { AccountLocalService } from './account.local.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.less'],
  providers: [AccountLocalService]
})
export class AccountComponent implements OnInit {

  constructor(
    private accountLocalService: AccountLocalService
  ) { }

  ngOnInit(): void {
  }

}
