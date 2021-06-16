import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactPhoneModalComponent } from './contact-phone-modal.component';

describe('ContactPhoneModalComponent', () => {
  let component: ContactPhoneModalComponent;
  let fixture: ComponentFixture<ContactPhoneModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactPhoneModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactPhoneModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
