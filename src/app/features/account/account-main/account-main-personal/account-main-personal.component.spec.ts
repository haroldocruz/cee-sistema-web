import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountMainPersonalComponent } from './account-main-personal.component';

describe('AccountMainPersonalComponent', () => {
  let component: AccountMainPersonalComponent;
  let fixture: ComponentFixture<AccountMainPersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountMainPersonalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountMainPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
