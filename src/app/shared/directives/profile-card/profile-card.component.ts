import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ContextEnum } from 'src/app/interfaces/enumerations/ContextEnum';
import { UtilService } from 'src/app/shared/services/util.service';

export interface IProfileCardTemplate {
    status: boolean,
    context: string,
    profileId: string,
    profileName: string,
    userId: string,
    userName: string,
    institutionId: string,
    institutionName: string,
    address: string,
    phone: string,
    email: string,
    image: string
}

export interface IProfileCardOptions {
    btnChat?: boolean;
    btnDisable?: boolean;
    btnToView?: boolean;
    btnAssignProfile?: boolean;
}

@Component({
    selector: 'sd-profile-card',
    templateUrl: './profile-card.component.html',
    styleUrls: ['./profile-card.component.less']
})
export class ProfileCardComponent implements OnInit {

    public bsModalRef: BsModalRef;
    public utilService: UtilService;

    @Input() profileCard: IProfileCardTemplate;
    @Input() profileCardOptions: IProfileCardOptions;

    constructor(
        public modalService: BsModalService
    ) {
        this.profileCard = {
            status: false,
            context: ContextEnum.UNINFORMED,
            profileId: null,
            profileName: '',
            userId: null,
            userName: '',
            institutionId: null,
            institutionName: '',
            image: '/assets/avatar1.png',
            phone: '',
            email: '',
            address: '',
        }
        this.profileCardOptions = {
            btnChat: false,
            btnDisable: false,
            btnToView: false,
            btnAssignProfile: false
        }
    }

    ngOnInit(): void {
    }

}
