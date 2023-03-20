import { Component, OnInit } from '@angular/core';
import { IAddress, IEmail, IPhone } from 'src/app/interfaces/Contact';
import { IProfile } from 'src/app/interfaces/Profile';
import { orderBy } from "lodash";
import { IUser } from 'src/app/interfaces/User';
import { CeeLocalService } from '../../cee.local.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ChatDirectModalComponent } from 'src/app/features/chat/chat-direct-modal/chat-direct-modal.component';
import { IChatUser } from 'src/app/interfaces/IChatUser';
import { IProfileCardTemplate, IProfileCardOptions } from 'src/app/shared/directives/profile-card/profile-card.component';
import { UtilService } from 'src/app/shared/services/util.service';
import { AuthService } from 'src/app/auth/auth.service';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { InstitutionService } from 'src/app/shared/services/institution.service';
import { IStatusMessage } from 'src/app/interfaces/IStatusMessage';
import { IInstitution, IMember } from 'src/app/interfaces/Institution';
import { IQueryConfig } from 'src/app/interfaces/IQueryConfig';
import { IReqBindMember } from 'src/app/interfaces/IReqBindMember';
import { EventEmitterService } from 'src/app/shared/services/event-emitter.service';
import { ENV } from 'src/environments/environment';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
    selector: 'app-cee-user-list',
    templateUrl: './cee-user-list.component.html',
    styleUrls: ['./cee-user-list.component.less']
})
export class CeeUserListComponent implements OnInit {

    private subDestroy$: Subject<boolean> = new Subject();

    private baseUrl = `${ENV.api.url}`;

    public bsModalRef: BsModalRef;

    profileCardList: IProfileCardTemplate[];
    profileCardOptions: IProfileCardOptions;

    fieldsToFilter: Array<{ field: string, value: string }>;

    constructor(
        private modalService: BsModalService,
        private institutionService: InstitutionService,
        public ceeLocalService: CeeLocalService,
        private utilService: UtilService,
        private notifyService: NotificationService,
    ) { }

    ngOnDestroy(): void {
        this.subDestroy$.next();
        this.subDestroy$.complete();
    }

    ngOnInit(): void {
        this.index();

        EventEmitterService.get('is-success').pipe(takeUntil(this.subDestroy$)).subscribe((isSuccess) => {
            if (isSuccess)
                this.index();
        });

        this.fieldsToFilter = [
            { field: 'userName', value: this.ceeLocalService.filter },
            { field: 'profileName', value: this.ceeLocalService.filter }
        ];
        this.profileCardOptions = { btnChat: true, btnDisable: true, btnToView: true }
    }

    index() {
        const queryConfig: IQueryConfig = {
            populateList: [
                { path: 'memberList._user', select: ['name', 'contact', 'gender', 'image'] },
                { path: 'memberList._profile', select: ['name'] }
            ]
        };
        const filter = { _id: AuthService.currentBind._institution };

        this.institutionService.filterAll(filter, queryConfig).pipe(takeUntil(this.subDestroy$)).subscribe((data) => {
            console.log("AuthService", AuthService.user);

            if (data.statusCode) { this.onFail(data); return; }

            this.profileCardList = this.toViewBindToProfileCard(data[0]);
        });
    }

    onFail(data: IStatusMessage) {
        UtilService.notifying.showError("data.statusMessage", data.statusCode.toString());
    }

    openChatDirectModal(user: IProfileCardTemplate) {
        const user2: IChatUser = { name: user.userName, image: user.image, dateTime: "28/08/2021" }
        const initialState = { user: user2 };
        this.bsModalRef = this.modalService.show(ChatDirectModalComponent, { id: UtilService.getRandom9Digits(), class: 'modal-md', initialState });
        this.bsModalRef.content.closeBtnName = 'Close';
    }

    //TODO: refactor
    unbindMember(profileCard: IProfileCardTemplate) {
        if (!UtilService.isConfirm(`Deseja desvincular ${profileCard.userName} do perfil de ${profileCard.profileName}?`))
            return;

        const reqBindMember: IReqBindMember = {
            status: profileCard.status,
            context: profileCard.context,
            _profile: profileCard.profileId,
            profileName: profileCard.profileName,
            _institution: profileCard.institutionId,
            institutionName: profileCard.institutionName,
            _user: profileCard.userId,
            userName: profileCard.userName,
        }

        this.institutionService.unbindMember(reqBindMember).pipe(takeUntil(this.subDestroy$)).subscribe((data) => {

            if (data.statusCode >= 200 && data.statusCode < 300) {
                this.notifyService.showSuccess(data.statusMessage, 'OK');
                this.index();
                return;
            }

            //TODO:
            (data.statusCode >= 300 && data.statusCode < 500)
                ? this.notifyService.showWarning(data.statusMessage, 'Algo deu errado')
                : this.notifyService.showError(data.statusMessage, 'ERRO')

        });
    }

    toViewBindToProfileCard(institution: IInstitution): IProfileCardTemplate[] {

        const memberList: IMember[] = institution.memberList;
        let profileCardList: IProfileCardTemplate[] = [];

        memberList.forEach(member => {
            const profile: IProfile & string = member._profile;
            const user: IUser & string = member._user;
            console.log("user", user);
            const address: IAddress = (user.contact?.addressList.length > 0) ? user.contact.addressList[0] : null;
            const phone: IPhone = (user.contact?.phoneList.length > 0) ? user.contact.phoneList[0] : null;
            const email: IEmail = (user.contact?.emailList.length > 0) ? user.contact.emailList[0] : null;

            const profileCard: IProfileCardTemplate = {
                status: member.status,
                context: member.context,
                profileId: profile._id,
                profileName: profile.name,
                institutionId: institution._id,
                institutionName: institution.name,
                userId: user._id,
                userName: user.name,
                address: this.utilService.addressToString(address),
                phone: (phone != null) ? `${phone.number}` : '',
                email: (email != null) ? `${email.address}` : '',
                image: `${this.baseUrl}/uploads/${user.image?.path}` || UtilService.getAvatarByGender(user.gender)
            }
            profileCardList.push(profileCard);
        });

        return orderBy(profileCardList, ['userName', 'profileName'], ['asc']);
    }
}
