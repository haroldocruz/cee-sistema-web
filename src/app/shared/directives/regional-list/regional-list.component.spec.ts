import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionalListComponent } from './regional-list.component';

describe('RegionalListComponent', () => {
  let component: RegionalListComponent;
  let fixture: ComponentFixture<RegionalListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegionalListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
