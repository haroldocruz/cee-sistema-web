import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ContextEnum } from 'src/app/interfaces/enumerations/ContextEnum';
import { IProfile, Profile } from 'src/app/interfaces/Profile';
import { ProfileService } from 'src/app/services/profile.service';
import { UtilService } from 'src/app/services/util.service';

@Component({
    selector: 'app-profile-form-modal',
    templateUrl: './profile-form-modal.component.html',
    styleUrls: ['./profile-form-modal.component.less']
})
export class ProfileFormModalComponent implements OnInit {

    @Input() public profile: IProfile;
    @Input() public profileId: string;

    public context
    public contextList: string[];
    public status

    public isLoading: boolean = false;

    constructor(
        public bsModalRef: BsModalRef,
        public bsModalRef2: BsModalRef,
        private modalService: BsModalService,
        private profileService: ProfileService,
        public util: UtilService
    ) {
        this.profile = new Profile();
    }

    ngOnInit(): void {
        this.contextList = Object.values(ContextEnum);
        this.index();
    }

    index() {
        if (this.profile?._id) return;

        if (!this.profileId) {
            this.profile = new Profile();
            return;
        }

        this.isLoading = true;
        this.profileService.readById(this.profileId).subscribe((data) => {
            if (data.hasOwnProperty('_id')) {
                const iData: IProfile = data;
                this.profile = iData;
            }

            this.isLoading = false;
        });
    }

    create() {
        if (!UtilService.isConfirm()) return;

        UtilService.default(this.profileService.create(this.profile));

        if (this.bsModalRef)
            this.bsModalRef.hide();
    }

    update() {

        if (!UtilService.isConfirm()) return;

        UtilService.default(this.profileService.update(this.profile));

        if (this.bsModalRef)
            this.bsModalRef.hide();
    }
}
