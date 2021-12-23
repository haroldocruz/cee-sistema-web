import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountImageComponent } from './account-image.component';

describe('AccountImageComponent', () => {
  let component: AccountImageComponent;
  let fixture: ComponentFixture<AccountImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
