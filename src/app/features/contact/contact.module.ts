import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { ContactEmailModalComponent } from './contact-email-modal/contact-email-modal.component';
import { ContactPhoneModalComponent } from './contact-phone-modal/contact-phone-modal.component';
import { ContactAddressModalComponent } from './contact-address-modal/contact-address-modal.component';
import { ContactModalComponent } from './contact-modal/contact-modal.component';



@NgModule({
  declarations: [ContactComponent, ContactEmailModalComponent, ContactPhoneModalComponent, ContactAddressModalComponent, ContactModalComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: []
})
export class ContactModule { }
