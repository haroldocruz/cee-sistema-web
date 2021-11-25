import { ProfileLocalService } from '../profile.local.service';
import { Component, Input, OnInit } from '@angular/core';
import { IProfile, Profile } from 'src/app/interfaces/Profile';
import { EventEmitterService } from 'src/app/services/event-emitter.service';
import { ProfileService } from 'src/app/services/profile.service';
import { UtilService } from 'src/app/services/util.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ProfileFormModalComponent } from '../profile-form-modal/profile-form-modal.component';

@Component({
    selector: 'app-profile-list',
    templateUrl: './profile-list.component.html',
    styleUrls: ['./profile-list.component.less']
})
export class ProfileListComponent implements OnInit {

    @Input() profileList: IProfile[];
    @Input() filter: IProfile;

    public contextFilter: string;

    private bsModalRef: BsModalRef;

    constructor(
        public profileLocalService: ProfileLocalService,
        public profileService: ProfileService,
        private bsModalService: BsModalService
    ) { }

    ngOnInit(): void {
        if (!this.filter) this.filter = {};

        this.index(this.filter);

        EventEmitterService.get('is-success').subscribe((isSuccess) => {
            if (!isSuccess) return;
            this.index(this.filter);
        });

        EventEmitterService.get('profile-context-filter').subscribe((context) => {
            this.contextFilter = context
            console.log("context", context);
        });
    }

    index(filter): void {
        this.profileService.readFilter(filter).subscribe((data) => {
            this.profileList = data;
        });
    }

    edit(profile: IProfile | null) {
        ProfileLocalService.profile = (profile) ? profile : new Profile();
    }

    openProfileFormModal(profile: IProfile) {
        const initialState = { profile };
        this.bsModalRef = this.bsModalService.show(ProfileFormModalComponent, { id: UtilService.getRandom9Digits(), class: 'modal-lg', initialState });
        this.bsModalRef.content.closeBtnName = 'Close';
    }

    delete(id: string): void {
        if (!UtilService.isConfirm()) return;

        UtilService.default(this.profileService.delete(id));
    }

    changeStatus(profile: IProfile): void {
        if (!UtilService.isConfirm()) return;

        const p: IProfile = { _id: profile._id, status: !profile.status }

        UtilService.default(this.profileService.update(p));
    }

}
