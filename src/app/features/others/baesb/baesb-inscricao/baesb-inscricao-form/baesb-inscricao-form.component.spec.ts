import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaesbInscricaoFormComponent } from './baesb-inscricao-form.component';

describe('BaesbInscricaoFormComponent', () => {
  let component: BaesbInscricaoFormComponent;
  let fixture: ComponentFixture<BaesbInscricaoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaesbInscricaoFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaesbInscricaoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
