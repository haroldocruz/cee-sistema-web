import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaliadorDetalharDialogComponent } from './avaliador-detalhar-dialog.component';

describe('AvaliadorDetalharDialogComponent', () => {
  let component: AvaliadorDetalharDialogComponent;
  let fixture: ComponentFixture<AvaliadorDetalharDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvaliadorDetalharDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvaliadorDetalharDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
