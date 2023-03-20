import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProfileLocalService } from './../profile.local.service';
import { AuthService } from 'src/app/auth/auth.service';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
    selector: 'app-profile-personal',
    templateUrl: './profile-personal.component.html',
    styleUrls: ['./profile-personal.component.less']
})
export class ProfilePersonalComponent implements OnInit, OnDestroy {

    private subDestroy$ = new Subject();

    constructor(
        private route: ActivatedRoute,
        public profileLocalService: ProfileLocalService,
        private userService: UserService
    ) { }

    ngOnDestroy() {
        this.subDestroy$.next();
        this.subDestroy$.complete();
    }

    ngOnInit(): void {

        this.route.queryParams
            .pipe(takeUntil(this.subDestroy$))
            .subscribe((params) => {

                let id: string = params['userId'] || AuthService.user._id;

                this.userService.readById(id)
                    .pipe(takeUntil(this.subDestroy$))
                    .subscribe((data) => {
                        ProfileLocalService.user = data;
                    });

            });
    }
}
