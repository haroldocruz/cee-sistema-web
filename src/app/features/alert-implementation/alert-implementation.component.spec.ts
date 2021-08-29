import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertImplementationComponent } from './alert-implementation.component';

describe('AlertImplementationComponent', () => {
  let component: AlertImplementationComponent;
  let fixture: ComponentFixture<AlertImplementationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertImplementationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertImplementationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
