import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeeUserComponent } from './cee-user.component';

describe('CeeUserComponent', () => {
  let component: CeeUserComponent;
  let fixture: ComponentFixture<CeeUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CeeUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CeeUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
