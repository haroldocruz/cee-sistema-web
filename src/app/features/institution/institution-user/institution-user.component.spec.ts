import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionUserComponent } from './institution-user.component';

describe('InstitutionUserComponent', () => {
  let component: InstitutionUserComponent;
  let fixture: ComponentFixture<InstitutionUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstitutionUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstitutionUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
