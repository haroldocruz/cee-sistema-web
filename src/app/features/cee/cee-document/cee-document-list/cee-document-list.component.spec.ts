import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeeDocumentListComponent } from './cee-document-list.component';

describe('CeeDocumentListComponent', () => {
  let component: CeeDocumentListComponent;
  let fixture: ComponentFixture<CeeDocumentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CeeDocumentListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CeeDocumentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
