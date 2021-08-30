import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeeInstitutionListComponent } from './cee-institution-list.component';

describe('CeeInstitutionListComponent', () => {
  let component: CeeInstitutionListComponent;
  let fixture: ComponentFixture<CeeInstitutionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CeeInstitutionListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CeeInstitutionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
