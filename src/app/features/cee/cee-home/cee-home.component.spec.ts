import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CeeHomeComponent } from './cee-home.component';

describe('CeeHomeComponent', () => {
  let component: CeeHomeComponent;
  let fixture: ComponentFixture<CeeHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CeeHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CeeHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
