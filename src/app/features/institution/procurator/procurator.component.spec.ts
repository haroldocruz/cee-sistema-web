import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcuratorComponent } from './procurator.component';

describe('ProcuratorComponent', () => {
  let component: ProcuratorComponent;
  let fixture: ComponentFixture<ProcuratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcuratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcuratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
