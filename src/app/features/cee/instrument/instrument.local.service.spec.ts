import { TestBed } from '@angular/core/testing';

import { InstrumentLocalService } from './instrument.local.service';

describe('InstrumentLocalService', () => {
  let service: InstrumentLocalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InstrumentLocalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
