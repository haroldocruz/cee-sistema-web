import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AfterContentChecked, Component, Input, OnInit } from '@angular/core';
import { IUser } from 'src/app/interfaces/User';
import { UtilService } from 'src/app/services/util.service';
import { UserLocalService } from 'src/app/features/user/user.local.service';
import { ActivatedRoute } from '@angular/router';
import { InstitutionService } from 'src/app/services/institution.service';
import { IInstitution, Institution } from 'src/app/interfaces/Institution';
import { CeeInstitutionFormComponent } from '../cee-institution-form/cee-institution-form.component';
import { EventEmitterService } from 'src/app/services/event-emitter.service';
import { CeeUserBindComponent } from '../../cee-user/cee-user-bind/cee-user-bind.component';
import { ContextEnum } from 'src/app/interfaces/enumerations/ContextEnum';

interface IInstitutionView {
  _id: string;
  context: string;
  socialReason: string;
  name: string;
  emailMain: string;
  emailList: string;
  phoneMain: string;
  phoneList: string;
  addressMain: string;
  zipCodeAddressMain: string;
  description: string;
}

@Component({
  selector: 'app-cee-institution-view',
  templateUrl: './cee-institution-view.component.html',
  styleUrls: ['./cee-institution-view.component.less']
})
export class CeeInstitutionViewComponent implements OnInit {

  public bsModalRef: BsModalRef;

  @Input() user: IUser;
  private institution: IInstitution;
  public institutionView: IInstitutionView;

  public ContextEnum = ContextEnum;

  constructor(
    public bsModalService: BsModalService,
    public util: UtilService,
    private route: ActivatedRoute,
    public userService: UserLocalService,
    public institutionService: InstitutionService,
    private modalService: BsModalService
  ) {
    this.index();
  }

  ngOnInit(): void {

    UtilService.Title.setTitle('CEE | Institution | View')
    this.toView(new Institution());

    EventEmitterService.get('is-success').subscribe((isSuccess) => {
      if (isSuccess)
        this.index();
    })
  }

  private index() {
    this.route.queryParams.subscribe((params) => {

      let id: string = params['institutionId'];

      //TODO: refatorar
      if (!id) return;

      this.institutionService.readById(id).subscribe((data) => {
        if (data.statusCode) {
          //TODO: not implemented
          return;
        }

        this.institution = data;
        this.toView(data);
      });

    });
  }

  public openInstitutionFormModal(): void {
    const initialState = { institutionId: this.institution._id, institution: this.institution };
    this.bsModalRef = this.bsModalService.show(CeeInstitutionFormComponent, { id: UtilService.getRandom9Digits(), class: 'modal-lg', initialState });
    this.bsModalRef.content.closeBtnName = 'Close';
  }

  public openBindUserInInstitutionModal(): void {
    const initialState = { institution: this.institution };
    this.bsModalRef = this.modalService.show(CeeUserBindComponent, { id: 1, class: 'modal-lg', initialState });
    this.bsModalRef.content.closeBtnName = 'Close';
  }

  private toView(i: IInstitution): void {

    this.institutionView = {
      _id: i._id,
      context: i.context,
      name: i.name,
      phoneMain: this.util.phoneMasked(i.contact?.phoneList[0]?.number) || 'Nenhum telefone cadastrado',
      phoneList: this.util.phoneListToString(i.contact?.phoneList, ' | ') || 'Nenhum telefone cadastrado',
      emailMain: i.contact?.emailList[0]?.address || 'Nenhum email cadastrado',
      emailList: this.util.emailListToString(i.contact?.emailList, ' | ') || 'Nenhum email cadastrado',
      addressMain: this.util.addressToString(i.contact?.addressList[0]) || 'Nenhum endereço cadastrado',
      zipCodeAddressMain: this.util.anyMasked(i.contact?.addressList[0]?.zipcode?.toString(), "00.000-000") || 'Nenhum cep cadastrado',
      socialReason: i.socialReason,

      description: i.description || 'Não há descrição'
    }
  }

}
