import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountAboutmeComponent } from './account-aboutme.component';

describe('AccountAboutmeComponent', () => {
  let component: AccountAboutmeComponent;
  let fixture: ComponentFixture<AccountAboutmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountAboutmeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountAboutmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
