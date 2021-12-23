import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountMainActivityComponent } from './account-main-activity.component';

describe('AccountMainActivityComponent', () => {
  let component: AccountMainActivityComponent;
  let fixture: ComponentFixture<AccountMainActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountMainActivityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountMainActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
