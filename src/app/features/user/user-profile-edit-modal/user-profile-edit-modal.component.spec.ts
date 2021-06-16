import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileEditModalComponent } from './user-profile-edit-modal.component';

describe('UserProfileEditModalComponent', () => {
  let component: UserProfileEditModalComponent;
  let fixture: ComponentFixture<UserProfileEditModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserProfileEditModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
