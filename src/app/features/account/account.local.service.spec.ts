import { TestBed } from '@angular/core/testing';

import { AccountLocalService } from './account.local.service';

describe('AccountService', () => {
  let service: AccountLocalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountLocalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
