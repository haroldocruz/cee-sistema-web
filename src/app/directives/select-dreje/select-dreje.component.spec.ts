import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectDrejeComponent } from './select-dreje.component';

describe('SelectDrejeComponent', () => {
  let component: SelectDrejeComponent;
  let fixture: ComponentFixture<SelectDrejeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectDrejeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectDrejeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
