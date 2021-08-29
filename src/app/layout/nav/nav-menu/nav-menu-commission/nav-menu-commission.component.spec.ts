import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavMenuCommissionComponent } from './nav-menu-commission.component';

describe('NavMenuCommissionComponent', () => {
  let component: NavMenuCommissionComponent;
  let fixture: ComponentFixture<NavMenuCommissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavMenuCommissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavMenuCommissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
