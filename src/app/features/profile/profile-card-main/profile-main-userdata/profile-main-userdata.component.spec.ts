import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileMainUserdataComponent } from './profile-main-userdata.component';

describe('ProfileMainUserdataComponent', () => {
  let component: ProfileMainUserdataComponent;
  let fixture: ComponentFixture<ProfileMainUserdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileMainUserdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileMainUserdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
