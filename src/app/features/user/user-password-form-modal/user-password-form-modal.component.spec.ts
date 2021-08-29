import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPasswordFormModalComponent } from './user-password-form-modal.component';

describe('UserPasswordFormModalComponent', () => {
  let component: UserPasswordFormModalComponent;
  let fixture: ComponentFixture<UserPasswordFormModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPasswordFormModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPasswordFormModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
