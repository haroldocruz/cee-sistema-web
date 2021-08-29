import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeeUserViewComponent } from './cee-user-view.component';

describe('CeeUserViewComponent', () => {
  let component: CeeUserViewComponent;
  let fixture: ComponentFixture<CeeUserViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CeeUserViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CeeUserViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
