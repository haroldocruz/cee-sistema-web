import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrumentViewComponent } from './instrument-view.component';

describe('InstrumentViewComponent', () => {
  let component: InstrumentViewComponent;
  let fixture: ComponentFixture<InstrumentViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstrumentViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstrumentViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
