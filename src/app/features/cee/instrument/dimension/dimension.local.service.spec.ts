import { TestBed } from '@angular/core/testing';

import { DimensionLocalService } from './dimension.local.service';

describe('DimensionLocalService', () => {
  let service: DimensionLocalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DimensionLocalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
