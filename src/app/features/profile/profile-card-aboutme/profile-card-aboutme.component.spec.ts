import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileCardAboutmeComponent } from './profile-card-aboutme.component';

describe('ProfileCardAboutmeComponent', () => {
  let component: ProfileCardAboutmeComponent;
  let fixture: ComponentFixture<ProfileCardAboutmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileCardAboutmeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileCardAboutmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
