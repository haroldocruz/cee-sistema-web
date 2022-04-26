import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrumentFilterComponent } from './instrument-filter.component';

describe('InstrumentFilterComponent', () => {
  let component: InstrumentFilterComponent;
  let fixture: ComponentFixture<InstrumentFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstrumentFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstrumentFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
