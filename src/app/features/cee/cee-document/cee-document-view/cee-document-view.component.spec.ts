import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeeDocumentViewComponent } from './cee-document-view.component';

describe('CeeDocumentViewComponent', () => {
  let component: CeeDocumentViewComponent;
  let fixture: ComponentFixture<CeeDocumentViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CeeDocumentViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CeeDocumentViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
