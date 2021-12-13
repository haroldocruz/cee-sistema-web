import { TestBed } from '@angular/core/testing';

import { DocumentLocalService } from './document.local.service';

describe('DocumentLocalService', () => {
  let service: DocumentLocalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocumentLocalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
