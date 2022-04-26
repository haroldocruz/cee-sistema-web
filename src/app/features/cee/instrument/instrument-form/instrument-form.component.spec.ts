import { ComponentFixture, getTestBed, TestBed } from '@angular/core/testing';
import { BsModalRef, BsModalService, ModalModule } from 'ngx-bootstrap/modal';

import { InstrumentFormComponent } from './instrument-form.component';

describe('InstrumentFormComponent', () => {
  let component: InstrumentFormComponent;
  let fixture: ComponentFixture<InstrumentFormComponent>;

  let bsModalService: BsModalService;
  let bsModalRef: BsModalRef;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstrumentFormComponent ],
      imports: [ ModalModule.forRoot() ],
      providers: [ BsModalService, BsModalRef ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    // bsModalService = getTestBed().get(BsModalService);
    // bsModalRef = getTestBed().get(BsModalRef);
    fixture = TestBed.createComponent(InstrumentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });
});
