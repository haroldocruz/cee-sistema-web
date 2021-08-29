import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat.component';
import { FormsModule } from '@angular/forms';
import { ChatDirectModalComponent } from './chat-direct-modal/chat-direct-modal.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ChatComponent,
    ChatDirectModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class ChatModule { }
