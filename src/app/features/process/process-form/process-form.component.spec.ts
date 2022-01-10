import { ComponentFixture, getTestBed, TestBed } from '@angular/core/testing';
import { BsModalRef, BsModalService, ModalModule } from 'ngx-bootstrap/modal';

import { ProcessFormComponent } from './process-form.component';

describe('ProcessFormComponent', () => {
  let component: ProcessFormComponent;
  let fixture: ComponentFixture<ProcessFormComponent>;

  let bsModalService: BsModalService;
  let bsModalRef: BsModalRef;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessFormComponent ],
      imports: [ ModalModule.forRoot() ],
      providers: [ BsModalService, BsModalRef ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    // bsModalService = getTestBed().get(BsModalService);
    // bsModalRef = getTestBed().get(BsModalRef);
    fixture = TestBed.createComponent(ProcessFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });
});
