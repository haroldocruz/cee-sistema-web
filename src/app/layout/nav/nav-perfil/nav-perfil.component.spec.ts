import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavPerfilComponent } from './nav-perfil.component';

describe('NavPerfilComponent', () => {
  let component: NavPerfilComponent;
  let fixture: ComponentFixture<NavPerfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavPerfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
