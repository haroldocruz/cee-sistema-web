import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactAddressModalComponent } from './contact-address-modal.component';

describe('ContactAddressModalComponent', () => {
  let component: ContactAddressModalComponent;
  let fixture: ComponentFixture<ContactAddressModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactAddressModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactAddressModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
