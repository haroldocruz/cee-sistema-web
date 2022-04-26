import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ContextEnum } from 'src/app/interfaces/enumerations/ContextEnum';
import { IProfile, Profile } from 'src/app/interfaces/Profile';
import { ProfileService } from 'src/app/services/profile.service';
import { UtilService } from 'src/app/services/util.service';

interface IRole {
    _id: string;
    status: boolean;
    urn: string;
    description: string;
}

interface IRoleTemplate {
    _id: string;
    status: boolean;
    urn: string;
    description: string;

    __class?: string;
    __flag?: boolean;
}

@Component({
    selector: 'app-profile-form-modal',
    templateUrl: './profile-form-modal.component.html',
    styleUrls: ['./profile-form-modal.component.less'],
})
export class ProfileFormModalComponent implements OnInit {
    @Input() public profile: IProfile;
    @Input() public profileId: string;

    public roleList: IRoleTemplate[] = [];
    public mockRoleList: IRole[];

    public context;
    public contextList: string[];
    public status;

    public isLoading: boolean = false;

    constructor(
        // public bsModalRef: BsModalRef,
        private profileService: ProfileService,
        public util: UtilService
    ) {
        this.profile = new Profile();
    }

    ngOnInit(): void {
        this.contextList = Object.values(ContextEnum);
        this.index();
        this.roleList = this.roleListTemplate(
            this.mockSystemRoleList(),
            this.mockProfileRoleList()
        );
    }

    index() {
        if (this.profile?._id) return;

        if (!this.profileId) {
            this.profile = new Profile();
            return;
        }

        this.isLoading = true;
        // this.profileService.readById(this.profileId).subscribe((data) => {
        //     if (data.hasOwnProperty('_id')) {
        //         const iData: IProfile = data;
        //         this.profile = iData;
        //     }

        //     this.isLoading = false;
        // });
    }

    public create() {
        if (!UtilService.isConfirm()) return;

        this.roleList.forEach((e) => {
            if (e.__flag) {
                delete e.__class;
                delete e.__flag;
                this.profile._roleList.push(e);
            }
        });

        UtilService.default(this.profileService.create(this.profile));

        // if (this.bsModalRef) this.bsModalRef.hide();
    }

    public update() {
        if (!UtilService.isConfirm()) return;

        UtilService.default(this.profileService.update(this.profile));

        // if (this.bsModalRef) this.bsModalRef.hide();
    }

    public toggleStatus(role: IRoleTemplate) {
        role.__flag = !role.__flag;
        role.__class = role.__flag ? 'success' : 'danger';
    }

    public roleListTemplate(
        systemRoleList: IRoleTemplate[],
        profileRoleList: string[]
    ): IRoleTemplate[] {
        systemRoleList.forEach((e, i) => {
            if (profileRoleList.includes(e._id)) {
                systemRoleList[i].__flag = true;
                systemRoleList[i].__class = 'success';
            } else {
                systemRoleList[i].__flag = false;
                systemRoleList[i].__class = 'danger';
            }
        });

        return systemRoleList;
    }

    private mockProfileRoleList(): string[] {
        return ['2'];
    }

    private mockSystemRoleList(): IRole[] {
        return [
            {
                _id: '1',
                status: true,
                urn: 'GET/contact',
                description: 'N/A: Contatos: Acessar Rota',
            },
            {
                _id: '2',
                status: false,
                urn: 'GET/account/personal',
                description: 'N/A: Conta: Acessar Rota',
            },
            {
                _id: '3',
                status: false,
                urn: 'GET/account/personal',
                description: 'N/A: Conta: Acessar Rota',
            },
        ];
    }
}
