import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavMenuManagerComponent } from './nav-menu-manager.component';

describe('NavMenuManagerComponent', () => {
  let component: NavMenuManagerComponent;
  let fixture: ComponentFixture<NavMenuManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavMenuManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavMenuManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
