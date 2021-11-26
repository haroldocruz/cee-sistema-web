import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageInConstructionComponent } from './page-in-construction.component';

describe('PageInConstructionComponent', () => {
  let component: PageInConstructionComponent;
  let fixture: ComponentFixture<PageInConstructionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageInConstructionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageInConstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
