import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaliadorDetalharComponent } from './avaliador-detalhar.component';

describe('AvaliadorDetalharComponent', () => {
  let component: AvaliadorDetalharComponent;
  let fixture: ComponentFixture<AvaliadorDetalharComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvaliadorDetalharComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvaliadorDetalharComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
