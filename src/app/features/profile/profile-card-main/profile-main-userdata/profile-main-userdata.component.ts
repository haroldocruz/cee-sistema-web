import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/interfaces/User';
import { UtilService } from 'src/app/shared/services/util.service';
import { ProfileLocalService } from '../../profile.local.service';

@Component({
    selector: 'app-profile-main-userdata',
    templateUrl: './profile-main-userdata.component.html',
    styleUrls: ['./profile-main-userdata.component.less']
})
export class ProfileMainUserdataComponent implements OnInit {

    user: IUser
    profileLocalService = ProfileLocalService;

    constructor(public utilService: UtilService) { }

    ngOnInit(): void {
    }

}
