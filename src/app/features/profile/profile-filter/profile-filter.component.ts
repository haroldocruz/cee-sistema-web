import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ContextEnum } from 'src/app/interfaces/enumerations/ContextEnum';
import { InstitutionTypeEnum } from 'src/app/interfaces/enumerations/InstitutionTypeEnum';
import { IProfile, Profile } from 'src/app/interfaces/Profile';
import { EventEmitterService } from 'src/app/services/event-emitter.service';
import { ProfileService } from 'src/app/services/profile.service';
import { UtilService } from 'src/app/services/util.service';
import { ProfileFormModalComponent } from '../profile-form-modal/profile-form-modal.component';

@Component({
  selector: 'app-profile-filter',
  templateUrl: './profile-filter.component.html',
  styleUrls: ['./profile-filter.component.less']
})
export class ProfileFilterComponent implements OnInit {

  @Input() public profileList: IProfile[];

  searchTimeout;

  institutionTypeEnum: typeof InstitutionTypeEnum;
  contextEnum: typeof ContextEnum;

  bsModalRef: BsModalRef;

  constructor(
    private profileService: ProfileService,
    private bsModalService: BsModalService
  ) { }

  ngOnInit(): void {
    this.institutionTypeEnum = InstitutionTypeEnum;
    this.contextEnum = ContextEnum;
  }

  inserir() {

    UtilService.default(this.profileService.create(new Profile()))
  }

  openProfileFormModal(profile: IProfile) {
    const initialState = { profile };
    this.bsModalRef = this.bsModalService.show(ProfileFormModalComponent, { id: UtilService.getRandom9Digits(), class: 'modal-lg', initialState });
    this.bsModalRef.content.closeBtnName = 'Close';
  }

  filtering(filter: string) {
    // this.ceeInstitutionLocalService.filter = filter;
  }

  changeSearch(search: string): void {
    clearTimeout(this.searchTimeout);
    this.searchTimeout = setTimeout(() => {
      EventEmitterService.get('ProfileFilterComponent.search').emit(search);
    }, 600);
  }

  contextFilter(context: string) {
    EventEmitterService.get('ProfileFilterComponent.context').emit(context);
  }

  refresh() {
    EventEmitterService.get('is-success').emit(true);
  }

}
