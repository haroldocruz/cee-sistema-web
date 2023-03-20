import { AfterViewChecked, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/auth.service';
import { ProfileLocalService } from 'src/app/features/profile/profile.local.service';
import { IAddress, IEmail, IPhone } from 'src/app/interfaces/Contact';
import { IUser, User } from 'src/app/interfaces/User';
import { EventEmitterService } from 'src/app/shared/services/event-emitter.service';
import { UtilService } from 'src/app/shared/services/util.service';
import { AccountLocalService } from '../../account.local.service';

interface IAccountMainPersonalTemplate {
    _id?: string;
    password?: string;
    name: string;
    cpf: string;
    gender: string;
    maritalStatus: string;
    birthDate: string;
    phoneList: IPhone[];
    emailList: IEmail[];
    addressList: IAddress[];
    description: string;
}

@Component({
    selector: 'app-account-main-personal',
    templateUrl: './account-main-personal.component.html',
    styleUrls: ['./account-main-personal.component.less']
})
export class AccountMainPersonalComponent implements OnInit {

    private subDestroy$: Subject<boolean> = new Subject();

    public account: IAccountMainPersonalTemplate;

    constructor(
        public utilService: UtilService
    ) { }

    ngOnDestroy(): void {
        this.subDestroy$.next();
        this.subDestroy$.complete();
    }

    ngOnInit(): void {
        this.toView(AccountLocalService.user);

        EventEmitterService.get('AccountLocalService.user')
            .pipe(takeUntil(this.subDestroy$))
            .subscribe(() => {
                this.toView(AccountLocalService.user);
            });
    }

    private toView(user: IUser = new User()) {
        console.log("user", user);
        this.account = {
            name: user.name,
            cpf: user.cpf?.toString(),
            gender: user.gender,
            maritalStatus: user.maritalStatus,
            birthDate: user.birthDate?.toString(),
            phoneList: user.contact?.phoneList,
            emailList: user.contact?.emailList,
            addressList: user.contact?.addressList,
            description: user.description,
        }
    }
}
