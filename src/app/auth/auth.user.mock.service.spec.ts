import { TestBed } from '@angular/core/testing';

import { AuthUserMockService } from './auth.user.mock.service';

describe('Auth.User.MockService', () => {
  let service: AuthUserMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthUserMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
