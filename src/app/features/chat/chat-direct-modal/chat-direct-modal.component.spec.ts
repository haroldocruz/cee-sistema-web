import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatDirectModalComponent } from './chat-direct-modal.component';

describe('ChatDirectModalComponent', () => {
  let component: ChatDirectModalComponent;
  let fixture: ComponentFixture<ChatDirectModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatDirectModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatDirectModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
