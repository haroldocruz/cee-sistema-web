import { Component, OnInit } from '@angular/core';
import { DocTypeEnum, IDoc } from 'src/app/interfaces/IDoc';
import { CeeDocumentLocalService } from '../cee-document-service.service';

@Component({
  selector: 'app-cee-document-list',
  templateUrl: './cee-document-list.component.html',
  styleUrls: ['./cee-document-list.component.less']
})
export class CeeDocumentListComponent implements OnInit {

  DocTypeEnum: typeof DocTypeEnum;
  filteredCount = { count: 0 };


  constructor(
    public ceeDocumentLocalService: CeeDocumentLocalService
  ) { }

  ngOnInit(): void {
    this.DocTypeEnum = DocTypeEnum;
    this.mockDocListInit();

  }

  mockDocListInit() {
    this.ceeDocumentLocalService.docList = [
      {
        type: "Resolução",
        number: 12,
        ementa: "Normatiza a gestão do Banco de Avaliadores da Educação Básica – BAEB/TO, no âmbito do Sistema Estadual de Ensino do Tocantins – SEE/TO.",
        criadaEm: "25/02/2021",
        publicadaEm: "26/02/2021",
        situation: "Revogado",
        revogadaPor: "Revogada pela Portaria CEE/TO nº 13, de 09/05/2021."
      },
      {
        type: "Portaria",
        number: 13,
        ementa: "Regulamenta a gestão do Banco de Avaliadores da Educação Básica – BAEB/TO, no âmbito do Sistema Estadual de Ensino do Tocantins – SEE/TO.",
        criadaEm: "11/05/2021",
        publicadaEm: "09/05/2021",
        situation: "Em vigor",
        revoga: "Revoga a Resolução CEE/TO nº 12, de 25/02/2021."
      },
      {
        type: "Portaria",
        number: 13,
        ementa: "Regulamenta AAA a gestão do Banco de Avaliadores da Educação Básica – BAEB/TO, no âmbito do Sistema Estadual de Ensino do Tocantins – SEE/TO.",
        criadaEm: "11/05/2021",
        publicadaEm: "09/05/2021",
        situation: "Em vigor",
        revoga: "Revoga a Resolução CEE/TO nº 12, de 25/02/2021."
      }
    ];

    this.ceeDocumentLocalService.docList.map((e) => {
      if (e.type == this.DocTypeEnum.DECRETO) this.ceeDocumentLocalService.typeLength.decretoLength += 1;
      if (e.type == this.DocTypeEnum.LEI) this.ceeDocumentLocalService.typeLength.leiLength += 1;
      if (e.type == this.DocTypeEnum.PARECER) this.ceeDocumentLocalService.typeLength.parecerLength += 1;
      if (e.type == this.DocTypeEnum.PORTARIA) this.ceeDocumentLocalService.typeLength.portariaLength += 1;
      if (e.type == this.DocTypeEnum.RESOLUCAO) this.ceeDocumentLocalService.typeLength.resolucaoLength += 1;
      if (e.type == this.DocTypeEnum.OTHER) this.ceeDocumentLocalService.typeLength.otherLength += 1;
    });

  }
}