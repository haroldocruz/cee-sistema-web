import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeeProfileBindListComponent } from './cee-profile-bind-list.component';

describe('CeeProfileBindListComponent', () => {
  let component: CeeProfileBindListComponent;
  let fixture: ComponentFixture<CeeProfileBindListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CeeProfileBindListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CeeProfileBindListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
