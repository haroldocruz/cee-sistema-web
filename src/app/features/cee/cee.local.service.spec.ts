import { TestBed } from '@angular/core/testing';

import { CeeLocalService } from './cee.local.service';

describe('CeeServiceService', () => {
  let service: CeeLocalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CeeLocalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
