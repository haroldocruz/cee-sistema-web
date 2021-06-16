import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeeDashboardComponent } from './cee-dashboard.component';

describe('CeeDashboardComponent', () => {
  let component: CeeDashboardComponent;
  let fixture: ComponentFixture<CeeDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CeeDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CeeDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
