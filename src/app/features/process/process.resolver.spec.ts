import { TestBed } from '@angular/core/testing';

import { ProcessResolver } from './process.resolver';

describe('ProcessResolver', () => {
  let resolver: ProcessResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ProcessResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
