import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeeRhComponent } from './cee-rh.component';

describe('CeeRhComponent', () => {
  let component: CeeRhComponent;
  let fixture: ComponentFixture<CeeRhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CeeRhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CeeRhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
