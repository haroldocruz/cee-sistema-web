import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileFormModalComponent } from './profile-form-modal.component';

describe('ProfileFormModalComponent', () => {
  let component: ProfileFormModalComponent;
  let fixture: ComponentFixture<ProfileFormModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileFormModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileFormModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
