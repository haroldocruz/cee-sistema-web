import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { IUser } from 'src/app/interfaces/User';
import { UtilService } from 'src/app/shared/services/util.service';

@Component({
    selector: 'app-avaliador-detalhar-dialog',
    templateUrl: './avaliador-detalhar-dialog.component.html',
    styleUrls: ['./avaliador-detalhar-dialog.component.less']
})
export class AvaliadorDetalharDialogComponent implements OnInit {

    constructor(
        public bsModalRef: BsModalRef,
        public util: UtilService) { }

    @Input() user: IUser

    ngOnInit(): void {
        this.user = {
            name: 'Nome do Avaliador',
            socialName: 'Nome social do avaliador',
            contact: { addressList: [{ zipcode: 77062060 }], emailList: [{ address: 'msom.info@gmail.com' }], phoneList: [{ number: 5563984589691, description: 'Descrição do telefone' }] }
        } as IUser;
    }

}