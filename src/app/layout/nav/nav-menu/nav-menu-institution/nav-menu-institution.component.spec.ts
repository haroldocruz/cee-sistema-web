import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavMenuInstitutionComponent } from './nav-menu-institution.component';

describe('NavMenuInstitutionComponent', () => {
  let component: NavMenuInstitutionComponent;
  let fixture: ComponentFixture<NavMenuInstitutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavMenuInstitutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavMenuInstitutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
