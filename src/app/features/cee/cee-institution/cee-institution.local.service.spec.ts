import { TestBed } from '@angular/core/testing';

import { CeeInstitutionLocalService } from './cee-institution.local.service';

describe('CeeInstitutionServiceService', () => {
  let service: CeeInstitutionLocalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CeeInstitutionLocalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
