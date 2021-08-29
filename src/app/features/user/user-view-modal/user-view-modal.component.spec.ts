import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserViewModalComponent } from './user-view-modal.component';

describe('UserViewModalComponent', () => {
  let component: UserViewModalComponent;
  let fixture: ComponentFixture<UserViewModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserViewModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserViewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
