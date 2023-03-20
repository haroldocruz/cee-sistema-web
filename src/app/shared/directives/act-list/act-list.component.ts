import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { AuthService } from 'src/app/auth/auth.service';
import { ActList, IAct } from 'src/app/interfaces/Act';
import { IBindInUser } from 'src/app/interfaces/IBindInUser';
import { IInstitution } from 'src/app/interfaces/Institution';
import { IQueryConfig } from 'src/app/interfaces/IQueryConfig';
import { IStatusMessage } from 'src/app/interfaces/IStatusMessage';
import { IProfile } from 'src/app/interfaces/Profile';
import { IUser } from 'src/app/interfaces/User';
import { EventEmitterService } from 'src/app/shared/services/event-emitter.service';
import { InstitutionService } from 'src/app/shared/services/institution.service';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { ProfileService } from 'src/app/shared/services/profile.service';

interface SchemaActListComponent {
}

@Component({
    selector: 'app-act-list',
    templateUrl: './act-list.component.html',
    styleUrls: ['./act-list.component.less']
})
export class ActListComponent implements OnInit {

    @Input() actList: IAct[];

    constructor(
        public bsModalRef: BsModalRef,
    ) { }

    ngOnInit(): void {
        if (!this.actList) this.actList = ActList;
    }

    index() { }

    selected(act: IAct): void {

        EventEmitterService.get('ActListComponent.selected').emit(act);

        if (this.bsModalRef)
            this.bsModalRef.hide();
    }

}
