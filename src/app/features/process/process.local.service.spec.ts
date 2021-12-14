import { TestBed } from '@angular/core/testing';

import { ProcessLocalService } from './process.local.service';

describe('ProcessLocalService', () => {
  let service: ProcessLocalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProcessLocalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
