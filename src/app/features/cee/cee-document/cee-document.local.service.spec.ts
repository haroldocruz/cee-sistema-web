import { TestBed } from '@angular/core/testing';

import { CeeDocumentLocalService } from './cee-document.local.service';

describe('CeeDocumentLocalService', () => {
  let service: CeeDocumentLocalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CeeDocumentLocalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
