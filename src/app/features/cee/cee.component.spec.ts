import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CeeComponent } from './cee.component';

describe('CeeComponent', () => {
  let component: CeeComponent;
  let fixture: ComponentFixture<CeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
