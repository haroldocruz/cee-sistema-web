import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaesbInscricaoComponent } from './baesb-inscricao.component';

describe('BaesbInscricaoComponent', () => {
  let component: BaesbInscricaoComponent;
  let fixture: ComponentFixture<BaesbInscricaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaesbInscricaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaesbInscricaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
