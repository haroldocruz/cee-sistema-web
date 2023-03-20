import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnyEnumComponent } from './any-enum.component';

describe('ModalityListComponent', () => {
  let component: AnyEnumComponent;
  let fixture: ComponentFixture<AnyEnumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnyEnumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnyEnumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
