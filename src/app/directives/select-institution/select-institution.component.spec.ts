import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectInstitutionComponent } from './select-institution.component';

describe('SelectInstitutionComponent', () => {
  let component: SelectInstitutionComponent;
  let fixture: ComponentFixture<SelectInstitutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectInstitutionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectInstitutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
