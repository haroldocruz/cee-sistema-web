import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeeUserListComponent as CeeUserListComponent } from './cee-user-list.component';

describe('CeeUserViewComponent', () => {
  let component: CeeUserListComponent;
  let fixture: ComponentFixture<CeeUserListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CeeUserListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CeeUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
