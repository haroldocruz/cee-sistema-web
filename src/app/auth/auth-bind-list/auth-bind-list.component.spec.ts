import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthBindListComponent } from './auth-bind-list.component';

describe('AuthProfileModalComponent', () => {
  let component: AuthBindListComponent;
  let fixture: ComponentFixture<AuthBindListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthBindListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthBindListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
