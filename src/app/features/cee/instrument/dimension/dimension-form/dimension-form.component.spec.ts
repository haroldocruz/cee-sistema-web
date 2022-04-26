import { ComponentFixture, getTestBed, TestBed } from '@angular/core/testing';
import { BsModalRef, BsModalService, ModalModule } from 'ngx-bootstrap/modal';

import { DimensionFormComponent } from './dimension-form.component';

describe('DimensionFormComponent', () => {
  let component: DimensionFormComponent;
  let fixture: ComponentFixture<DimensionFormComponent>;

  let bsModalService: BsModalService;
  let bsModalRef: BsModalRef;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DimensionFormComponent ],
      imports: [ ModalModule.forRoot() ],
      providers: [ BsModalService, BsModalRef ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    // bsModalService = getTestBed().get(BsModalService);
    // bsModalRef = getTestBed().get(BsModalRef);
    fixture = TestBed.createComponent(DimensionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });
});
