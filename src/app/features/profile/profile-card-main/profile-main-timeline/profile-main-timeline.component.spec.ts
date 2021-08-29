import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileMainTimelineComponent } from './profile-main-timeline.component';

describe('ProfileMainTimelineComponent', () => {
  let component: ProfileMainTimelineComponent;
  let fixture: ComponentFixture<ProfileMainTimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileMainTimelineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileMainTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
