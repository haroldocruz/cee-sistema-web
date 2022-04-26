import { TestBed } from '@angular/core/testing';

import { CourseGuard } from './course.guard';

describe('CourseGuard', () => {
  let guard: CourseGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CourseGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
