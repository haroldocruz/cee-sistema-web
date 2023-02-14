import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutTopFooterComponent } from './layout-top-footer.component';

describe('LayoutTopFooterComponent', () => {
  let component: LayoutTopFooterComponent;
  let fixture: ComponentFixture<LayoutTopFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutTopFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutTopFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
