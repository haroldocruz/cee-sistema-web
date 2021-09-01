
import { Component, OnInit } from '@angular/core';
import { InstitutionTypeEnum } from 'src/app/interfaces/enumerations/InstitutionTypeEnum';
import { CeeInstitutionLocalService } from '../cee-institution-service.service';

@Component({
  selector: 'app-cee-institution-list',
  templateUrl: './cee-institution-list.component.html',
  styleUrls: ['./cee-institution-list.component.less']
})
export class CeeInstitutionListComponent implements OnInit {

  InstitutionTypeEnum: typeof InstitutionTypeEnum;
  filteredCount = { count: 0 };


  constructor(
    public ceeInstitutionLocalService: CeeInstitutionLocalService
  ) { }

  ngOnInit(): void {
    this.InstitutionTypeEnum = InstitutionTypeEnum;
    this.mockDocListInit();

  }

  mockDocListInit() {
    this.ceeInstitutionLocalService.institutionList = [
      {
        type: InstitutionTypeEnum.PUBLIC_ADM,
        name: "Secretaria da Educação, Juventude e Esportes",
        sigla: "SEDUC/TO"
      },
      {
        type: InstitutionTypeEnum.PUBLIC_ADM,
        name: "Conselho Estadual de Educação",
        sigla: "CEE/TO"
      },
      {
        type: InstitutionTypeEnum.PUBLIC_ADM,
        name: "Conselho Estadual de Alimentação Escolar",
        sigla: "CAE/TO"
      },
      {
        type: InstitutionTypeEnum.PUBLIC_ADM,
        name: "Diretoria Regional de Ensino de Miracema",
        sigla: "DRE/Miracema/TO"
      },
      {
        type: InstitutionTypeEnum.PRIVATE_MAINTAINER,
        name: "Instituição MM",
        sigla: "IMM"
      },
      {
        type: InstitutionTypeEnum.PRIVATE_MAINTAINED,
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
        type: InstitutionTypeEnum.PUBLIC_UE,
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
        type: InstitutionTypeEnum.PUBLIC_UE,
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
        type: InstitutionTypeEnum.OTHER,
        name: "Fundação Bradesco"
      }
    ];

    this.ceeInstitutionLocalService.institutionList.map((e) => {
      if (e.type == this.InstitutionTypeEnum.PUBLIC_ADM) this.ceeInstitutionLocalService.typeLength.pubAdmLength += 1;
      if (e.type == this.InstitutionTypeEnum.PUBLIC_UE) this.ceeInstitutionLocalService.typeLength.pubUELength += 1;
      if (e.type == this.InstitutionTypeEnum.PRIVATE_MAINTAINED) this.ceeInstitutionLocalService.typeLength.privMaintainedLength += 1;
      if (e.type == this.InstitutionTypeEnum.PRIVATE_MAINTAINER) this.ceeInstitutionLocalService.typeLength.privMaintainerLength += 1;
      if (e.type == this.InstitutionTypeEnum.OTHER) this.ceeInstitutionLocalService.typeLength.otherLength += 1;
    });

  }
}