import { Component, Input, OnInit } from '@angular/core';
import { InstitutionTypeEnum } from 'src/app/interfaces/enumerations/InstitutionTypeEnum';
import { IProfile, Profile } from 'src/app/interfaces/Profile';
import { EventEmitterService } from 'src/app/services/event-emitter.service';
import { ProfileService } from 'src/app/services/profile.service';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-profile-filter',
  templateUrl: './profile-filter.component.html',
  styleUrls: ['./profile-filter.component.less']
})
export class ProfileFilterComponent implements OnInit {

  public institutionTypeEnum: typeof InstitutionTypeEnum;

  @Input() public profileList: IProfile[];

  constructor(
    private profileService: ProfileService
  ) { }

  ngOnInit(): void {
    this.institutionTypeEnum = InstitutionTypeEnum;
  }

  inserir() {

    UtilService.default(this.profileService.create(new Profile()))
  }

  openGroupFormModal(institution: any) {
    const initialState = { institution };
    // this.bsModalRef = this.bsModalService.show(CeeInstitutionFormComponent, { id: UtilService.getRandom9Digits(), class: 'modal-lg', initialState });
    // this.bsModalRef.content.closeBtnName = 'Close';
  }

  filtering(filter: string) {
    // this.ceeInstitutionLocalService.filter = filter;
  }

  refresh() {
    EventEmitterService.get('is-success').emit(true);
  }

}
