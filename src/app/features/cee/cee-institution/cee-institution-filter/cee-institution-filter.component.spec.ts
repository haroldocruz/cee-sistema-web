import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeeInstitutionFilterComponent } from './cee-institution-filter.component';

describe('CeeInstitutionFilterComponent', () => {
  let component: CeeInstitutionFilterComponent;
  let fixture: ComponentFixture<CeeInstitutionFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CeeInstitutionFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CeeInstitutionFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
