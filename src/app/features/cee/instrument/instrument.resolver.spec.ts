import { TestBed } from '@angular/core/testing';

import { InstrumentResolver } from './instrument.resolver';

describe('InstrumentResolver', () => {
  let resolver: InstrumentResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(InstrumentResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
