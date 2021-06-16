import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupFormModalComponent } from './group-form-modal.component';

describe('GroupFormModalComponent', () => {
  let component: GroupFormModalComponent;
  let fixture: ComponentFixture<GroupFormModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupFormModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupFormModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
