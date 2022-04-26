import { TestBed } from '@angular/core/testing';

import { IndicatorLocalService } from './indicator.local.service';

describe('IndicatorLocalService', () => {
  let service: IndicatorLocalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IndicatorLocalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
