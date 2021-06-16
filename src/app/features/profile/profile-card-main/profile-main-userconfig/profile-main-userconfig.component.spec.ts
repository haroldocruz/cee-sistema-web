import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileMainUserconfigComponent } from './profile-main-userconfig.component';

describe('ProfileMainUserconfigComponent', () => {
  let component: ProfileMainUserconfigComponent;
  let fixture: ComponentFixture<ProfileMainUserconfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileMainUserconfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileMainUserconfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
