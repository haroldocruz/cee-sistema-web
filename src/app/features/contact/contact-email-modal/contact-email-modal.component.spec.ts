import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactEmailModalComponent } from './contact-email-modal.component';

describe('ContactEmailModalComponent', () => {
  let component: ContactEmailModalComponent;
  let fixture: ComponentFixture<ContactEmailModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactEmailModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactEmailModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
