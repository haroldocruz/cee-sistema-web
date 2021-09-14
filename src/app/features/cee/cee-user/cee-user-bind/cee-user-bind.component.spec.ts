import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeeUserBindComponent } from './cee-user-bind.component';

describe('CeeUserBindComponent', () => {
  let component: CeeUserBindComponent;
  let fixture: ComponentFixture<CeeUserBindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CeeUserBindComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CeeUserBindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
