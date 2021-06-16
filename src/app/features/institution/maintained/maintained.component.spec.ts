import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintainedComponent } from './maintained.component';

describe('MaintainedComponent', () => {
  let component: MaintainedComponent;
  let fixture: ComponentFixture<MaintainedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintainedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintainedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
