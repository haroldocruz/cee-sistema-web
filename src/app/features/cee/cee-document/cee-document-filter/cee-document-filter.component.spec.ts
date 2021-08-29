import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeeDocumentFilterComponent } from './cee-document-filter.component';

describe('CeeDocumentFilterComponent', () => {
  let component: CeeDocumentFilterComponent;
  let fixture: ComponentFixture<CeeDocumentFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CeeDocumentFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CeeDocumentFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
