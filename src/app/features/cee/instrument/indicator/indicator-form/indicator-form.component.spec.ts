import { ComponentFixture, getTestBed, TestBed } from '@angular/core/testing';
import { BsModalRef, BsModalService, ModalModule } from 'ngx-bootstrap/modal';

import { IndicatorFormComponent } from './indicator-form.component';

describe('IndicatorFormComponent', () => {
  let component: IndicatorFormComponent;
  let fixture: ComponentFixture<IndicatorFormComponent>;

  let bsModalService: BsModalService;
  let bsModalRef: BsModalRef;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndicatorFormComponent ],
      imports: [ ModalModule.forRoot() ],
      providers: [ BsModalService, BsModalRef ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    // bsModalService = getTestBed().get(BsModalService);
    // bsModalRef = getTestBed().get(BsModalRef);
    fixture = TestBed.createComponent(IndicatorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });
});
