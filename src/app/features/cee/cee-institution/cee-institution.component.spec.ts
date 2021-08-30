import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeeInstitutionComponent } from './cee-institution.component';

describe('CeeInstitutionComponent', () => {
  let component: CeeInstitutionComponent;
  let fixture: ComponentFixture<CeeInstitutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CeeInstitutionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CeeInstitutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
