import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeeInstitutionFormComponent } from './cee-institution-form.component';

describe('CeeInstitutionFormComponent', () => {
  let component: CeeInstitutionFormComponent;
  let fixture: ComponentFixture<CeeInstitutionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CeeInstitutionFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CeeInstitutionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
