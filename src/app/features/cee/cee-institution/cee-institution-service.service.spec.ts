import { TestBed } from '@angular/core/testing';

import { CeeInstitutionServiceService } from './cee-institution-service.service';

describe('CeeInstitutionServiceService', () => {
  let service: CeeInstitutionServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CeeInstitutionServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
