
import { Component, OnInit } from '@angular/core';
import { InstitutionTypeEnum } from 'src/app/interfaces/enumerations/InstitutionTypeEnum';
import { CeeInstitutionLocalService } from '../cee-institution.local.service';
import { CeeInstitutionFormComponent } from '../cee-institution-form/cee-institution-form.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { UtilService } from 'src/app/shared/services/util.service';
import { AdministrativeSphereEnum } from 'src/app/interfaces/enumerations/administrativeSphereEnum';
import { InstitutionService } from 'src/app/shared/services/institution.service';
import { IInstitution } from 'src/app/interfaces/Institution';
import { EventEmitterService } from 'src/app/shared/services/event-emitter.service';

interface IInstitutionItemView {
    _id: String;
    institutionType?: String;
    administrativeSphere?: String;
    name?: String;
    initials?: String;
    maintainer?: String;
    credenciamento?: {
        concept?: number;
        start?: String;
        end?: String;
        situation?: String;
    };
}

@Component({
    selector: 'app-cee-institution-list',
    templateUrl: './cee-institution-list.component.html',
    styleUrls: ['./cee-institution-list.component.less']
})
export class CeeInstitutionListComponent implements OnInit {

    public bsModalRef: BsModalRef;

    InstitutionTypeEnum: typeof InstitutionTypeEnum;
    filteredCount = { count: 0 };
    institutionList: IInstitution[];
    institutionListView: IInstitutionItemView[];

    constructor(
        private institutionService: InstitutionService,
        public ceeInstitutionLocalService: CeeInstitutionLocalService,
        public bsModalService: BsModalService
    ) { }

    ngOnInit(): void {
        this.InstitutionTypeEnum = InstitutionTypeEnum;
        this.index();
        // this.indexMock();

        EventEmitterService.get('is-success').subscribe((isSuccess) => {
            if (isSuccess)
                this.index();
        })
    }

    index() {
        this.institutionService.read().subscribe((data) => {
            this.ceeInstitutionLocalService.institutionList = data;
            this.toView(data);
            EventEmitterService.get('getInstitutionList').emit(data);
        });
    }

    toView(iList: IInstitution[]): void {

        this.institutionListView = iList.map((e) => {

            let item: IInstitutionItemView = {
                _id: e._id,
                name: e.name,
                institutionType: e.institutionType,
                administrativeSphere: e.administrativeSphere,
                credenciamento: {
                    concept: undefined,
                    start: undefined,
                    end: undefined,
                    situation: undefined
                }
            }

            return item;
        });
    }

    // private countToFilter(iList: IInstitutionItemView[]) {

    //   this.ceeInstitutionLocalService.restartCount();
    //   this.ceeInstitutionLocalService.typeLength.institutionListLength = iList.length;

    //   iList.map((e) => {
    //     if (e.institutionType == this.InstitutionTypeEnum.PUBLIC_ADM)
    //       this.ceeInstitutionLocalService.typeLength.pubAdmLength += 1;
    //     if (e.institutionType == this.InstitutionTypeEnum.PUBLIC_UE)
    //       this.ceeInstitutionLocalService.typeLength.pubUELength += 1;
    //     if (e.institutionType == this.InstitutionTypeEnum.PRIVATE_MAINTAINED)
    //       this.ceeInstitutionLocalService.typeLength.privMaintainedLength += 1;
    //     if (e.institutionType == this.InstitutionTypeEnum.PRIVATE_MAINTAINER)
    //       this.ceeInstitutionLocalService.typeLength.privMaintainerLength += 1;
    //     // if (e.institutionType == this.InstitutionTypeEnum.OTHER)
    //     //   this.ceeInstitutionLocalService.typeLength.otherLength += 1;
    //     if (e.institutionType == this.InstitutionTypeEnum.UNINFORMED)
    //       this.ceeInstitutionLocalService.typeLength.otherLength += 1;
    //   });
    // }

    // openInstitutionFormModal(institutionItem: any) {
    //   const institution = this.institutionList.find((e) => { institutionItem._id === e._id });
    //   const initialState = { institutionId: institutionItem._id, institution: institution };
    //   this.bsModalRef = this.bsModalService.show(CeeInstitutionFormComponent, { id: UtilService.getRandom9Digits(), class: 'modal-lg', initialState });
    //   this.bsModalRef.content.closeBtnName = 'Close';
    // }

    mockIndex() {

        this.institutionListView = [
            {
                _id: "1",
                institutionType: InstitutionTypeEnum.PUBLIC_ADM,
                administrativeSphere: AdministrativeSphereEnum.PUBLIC_E,
                name: "Secretaria da Educação, Juventude e Esportes",
                initials: "SEDUC/TO"
            },
            {
                _id: "2",
                institutionType: InstitutionTypeEnum.PUBLIC_ADM,
                administrativeSphere: AdministrativeSphereEnum.PUBLIC_E,
                name: "Conselho Estadual de Educação",
                initials: "CEE/TO"
            },
            {
                _id: "3",
                institutionType: InstitutionTypeEnum.PUBLIC_ADM,
                administrativeSphere: AdministrativeSphereEnum.PUBLIC_E,
                name: "Conselho Estadual de Alimentação Escolar",
                initials: "CAE/TO"
            },
            {
                _id: "4",
                institutionType: InstitutionTypeEnum.PUBLIC_ADM,
                administrativeSphere: AdministrativeSphereEnum.PUBLIC_E,
                name: "Diretoria Regional de Ensino de Miracema",
                initials: "DRE/Miracema/TO"
            },
            {
                _id: "5",
                institutionType: InstitutionTypeEnum.PRIVATE_MAINTAINER,
                administrativeSphere: AdministrativeSphereEnum.PRIVATE,
                name: "Instituição MM",
                initials: "IMM"
            },
            {
                _id: "6",
                institutionType: InstitutionTypeEnum.PRIVATE_MAINTAINED,
                administrativeSphere: AdministrativeSphereEnum.PRIVATE,
                name: "Instituto Maria Mercerdes",
                maintainer: "Instituição MM",
                credenciamento: {
                    start: "22/05/2019",
                    end: "22/05/2021",
                    situation: "Regular",
                    concept: 5
                }
            },
            {
                _id: "7",
                institutionType: InstitutionTypeEnum.PUBLIC_UE,
                administrativeSphere: AdministrativeSphereEnum.PUBLIC_E,
                name: "Escola Estadual Liberdade",
                maintainer: "Secretaria da Educação, Juventude e Esportes",
                credenciamento: {
                    start: "22/05/2019",
                    end: "22/05/2021",
                    situation: "Irregular",
                    concept: 5
                }
            },
            {
                _id: "8",
                institutionType: InstitutionTypeEnum.PUBLIC_UE,
                administrativeSphere: AdministrativeSphereEnum.PUBLIC_E,
                name: "Escola Estadual Santa Rita de Cássia",
                maintainer: "Secretaria da Educação, Juventude e Esportes",
                credenciamento: {
                    start: "22/05/2019",
                    end: "22/05/2021",
                    situation: "Regular",
                    concept: 5
                }
            },
            {
                _id: "9",
                institutionType: InstitutionTypeEnum.UNINFORMED,
                administrativeSphere: AdministrativeSphereEnum.PRIVATE,
                name: "Fundação Bradesco"
            }
        ];

        // this.countToFilter(this.institutionListView);
    }
}