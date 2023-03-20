import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaliadorIncluirComponent } from './avaliador-incluir.component';

describe('AvaliadorIncluirComponent', () => {
  let component: AvaliadorIncluirComponent;
  let fixture: ComponentFixture<AvaliadorIncluirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvaliadorIncluirComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvaliadorIncluirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
