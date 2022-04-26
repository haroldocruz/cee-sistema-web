import { TestBed } from '@angular/core/testing';

import { CourseLocalService } from './course.local.service';

describe('CourseLocalService', () => {
  let service: CourseLocalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourseLocalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
