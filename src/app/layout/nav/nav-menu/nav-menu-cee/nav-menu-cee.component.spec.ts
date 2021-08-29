import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavMenuCeeComponent } from './nav-menu-cee.component';

describe('NavMenuCeeComponent', () => {
  let component: NavMenuCeeComponent;
  let fixture: ComponentFixture<NavMenuCeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavMenuCeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavMenuCeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
