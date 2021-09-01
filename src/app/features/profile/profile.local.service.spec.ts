import { TestBed } from '@angular/core/testing';

import { ProfileLocalService } from './profile.local.service';

describe('ProfileService', () => {
  let service: ProfileLocalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfileLocalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
