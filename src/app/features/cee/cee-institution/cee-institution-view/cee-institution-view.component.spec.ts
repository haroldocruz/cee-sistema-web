import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeeInstitutionViewComponent } from './cee-institution-view.component';

describe('CeeInstitutionViewComponent', () => {
  let component: CeeInstitutionViewComponent;
  let fixture: ComponentFixture<CeeInstitutionViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CeeInstitutionViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CeeInstitutionViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
