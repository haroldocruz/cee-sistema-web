import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthListModalComponent } from './auth-list-modal.component';

describe('AuthListModalComponent', () => {
  let component: AuthListModalComponent;
  let fixture: ComponentFixture<AuthListModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthListModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthListModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
