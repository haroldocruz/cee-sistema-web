import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountMainSettingsComponent } from './account-main-settings.component';

describe('AccountMainSettingsComponent', () => {
  let component: AccountMainSettingsComponent;
  let fixture: ComponentFixture<AccountMainSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountMainSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountMainSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
