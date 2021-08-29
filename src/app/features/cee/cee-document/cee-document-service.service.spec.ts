import { TestBed } from '@angular/core/testing';

import { CeeDocumentServiceService } from './cee-document-service.service';

describe('CeeDocumentServiceService', () => {
  let service: CeeDocumentServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CeeDocumentServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
