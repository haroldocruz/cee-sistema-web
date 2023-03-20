import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaliadorListarComponent } from './avaliador-listar.component';

describe('AvaliadorListarComponent', () => {
  let component: AvaliadorListarComponent;
  let fixture: ComponentFixture<AvaliadorListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvaliadorListarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvaliadorListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
