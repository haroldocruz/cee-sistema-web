import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthProfileModalComponent } from './auth-profile-modal.component';

describe('AuthProfileModalComponent', () => {
  let component: AuthProfileModalComponent;
  let fixture: ComponentFixture<AuthProfileModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthProfileModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthProfileModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
