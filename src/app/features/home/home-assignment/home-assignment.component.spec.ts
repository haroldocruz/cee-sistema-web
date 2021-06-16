import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAssignmentComponent } from './home-assignment.component';

describe('HomeAssignmentComponent', () => {
  let component: HomeAssignmentComponent;
  let fixture: ComponentFixture<HomeAssignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeAssignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
