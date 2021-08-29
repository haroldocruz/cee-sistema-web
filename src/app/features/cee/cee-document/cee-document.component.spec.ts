import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeeDocumentComponent } from './cee-document.component';

describe('CeeDocumentComponent', () => {
  let component: CeeDocumentComponent;
  let fixture: ComponentFixture<CeeDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CeeDocumentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CeeDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
