import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileCardImageComponent } from './profile-card-image.component';

describe('ProfileCardImageComponent', () => {
  let component: ProfileCardImageComponent;
  let fixture: ComponentFixture<ProfileCardImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileCardImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileCardImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
