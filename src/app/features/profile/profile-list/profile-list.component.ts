import { ProfileLocalService } from '../profile.local.service';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { IProfile } from 'src/app/interfaces/Profile';
import { EventEmitterService } from 'src/app/shared/services/event-emitter.service';
import { ProfileService } from 'src/app/shared/services/profile.service';
import { UtilService } from 'src/app/shared/services/util.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ProfileFormModalComponent } from '../profile-form-modal/profile-form-modal.component';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-profile-list',
    templateUrl: './profile-list.component.html',
    styleUrls: ['./profile-list.component.less']
})
export class ProfileListComponent implements OnInit, OnDestroy {

    @Input() profileList: IProfile[];
    @Input() filter: IProfile;

    private subDestroy$ = new Subject();

    public contextFilter: string;

    private bsModalRef: BsModalRef;

    constructor(
        public profileLocalService: ProfileLocalService,
        public profileService: ProfileService,
        private bsModalService: BsModalService
    ) { }

    ngOnDestroy(): void {
        this.subDestroy$.next();
        this.subDestroy$.complete();
    }

    ngOnInit(): void {
        if (!this.filter) this.filter = {};

        this.index();

        EventEmitterService.get('is-success')
            .pipe(takeUntil(this.subDestroy$))
            .subscribe((isSuccess) => {
                if (!isSuccess) return;
                this.index();
            });

        EventEmitterService.get('ProfileFilterComponent.context')
            .pipe(takeUntil(this.subDestroy$))
            .subscribe((context) => {
                this.contextFilter = context;
            });
    }

    index(): void {
        this.profileService.read().subscribe((data) => {
            this.profileList = data;
        });
    }

    // index(filter): void {
    //     this.profileService.readFilter(filter).subscribe((data) => {
    //         this.profileList = data;
    //     });
    // }

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
