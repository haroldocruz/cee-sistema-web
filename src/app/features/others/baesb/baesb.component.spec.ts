import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaesbComponent } from './baesb.component';

describe('BaesbComponent', () => {
  let component: BaesbComponent;
  let fixture: ComponentFixture<BaesbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaesbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaesbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
