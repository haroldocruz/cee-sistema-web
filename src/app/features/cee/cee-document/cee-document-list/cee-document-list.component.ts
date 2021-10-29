import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DocTypeEnum } from 'src/app/interfaces/IDoc';
import { CeeDocumentLocalService, IDoc } from '../cee-document.local.service';

interface IModelItemDocList {
  type: string,
  number: number,
  ementa: string,
  createdIn: string,
  publishedIn: string,
  situation: string,
  revokedBy: string,
}

@Component({
  selector: 'app-cee-document-list',
  templateUrl: './cee-document-list.component.html',
  styleUrls: ['./cee-document-list.component.less']
})
export class CeeDocumentListComponent implements OnInit {

  DocTypeEnum: typeof DocTypeEnum;
  filteredCount = { count: 0 };

  CeeDocumentLocalService = CeeDocumentLocalService;

  constructor(private ceeDocumentLocalService: CeeDocumentLocalService) { }

  ngOnInit(): void {
    this.DocTypeEnum = DocTypeEnum;
    this.mockDocListInit();
  }

  mockDocListInit() {

    // this.CeeDocumentLocalService.docList = this.getDocList();
    CeeDocumentLocalService.docList = [
      {
        type: "Resolução",
        number: 12,
        ementa: "Normatiza a gestão do Banco de Avaliadores da Educação Básica – BAEB/TO, no âmbito do Sistema Estadual de Ensino do Tocantins – SEE/TO.",
        createdIn: "25/02/2021",
        publishedIn: "26/02/2021",
        situation: "Revogado",
        revokedBy: "Revogada pela Portaria CEE/TO nº 13, de 09/05/2021."
      },
      {
        type: "Portaria",
        number: 13,
        ementa: "Regulamenta a gestão do Banco de Avaliadores da Educação Básica – BAEB/TO, no âmbito do Sistema Estadual de Ensino do Tocantins – SEE/TO.",
        createdIn: "11/05/2021",
        publishedIn: "09/05/2021",
        situation: "Em vigor",
        revoke: "Revoga a Resolução CEE/TO nº 12, de 25/02/2021."
      },
      {
        type: "Portaria",
        number: 11,
        ementa: "Regulamenta AAA a gestão do Banco de Avaliadores da Educação Básica – BAEB/TO, no âmbito do Sistema Estadual de Ensino do Tocantins – SEE/TO.",
        createdIn: "11/05/2021",
        publishedIn: "09/05/2021",
        situation: "Em vigor",
        changedBy: "Alterada pela Portaria nº 13, de 11/05/2021."
      }
    ];

    this.ceeDocumentLocalService.restart();
    
    CeeDocumentLocalService.docList.map((e) => {
      if (e.type == this.DocTypeEnum.DECRETO) CeeDocumentLocalService.typeLength.decretoLength += 1;
      if (e.type == this.DocTypeEnum.LEI) CeeDocumentLocalService.typeLength.leiLength += 1;
      if (e.type == this.DocTypeEnum.PARECER) CeeDocumentLocalService.typeLength.parecerLength += 1;
      if (e.type == this.DocTypeEnum.PORTARIA) CeeDocumentLocalService.typeLength.portariaLength += 1;
      if (e.type == this.DocTypeEnum.RESOLUCAO) CeeDocumentLocalService.typeLength.resolucaoLength += 1;
      if (e.type == this.DocTypeEnum.OTHER) CeeDocumentLocalService.typeLength.otherLength += 1;
    });

  }

  // getDocList(): Observable<IDoc[]> {
  //   const fakeValues = [
  //     {
  //       type: "Resolução",
  //       number: 12,
  //       ementa: "Normatiza a gestão do Banco de Avaliadores da Educação Básica – BAEB/TO, no âmbito do Sistema Estadual de Ensino do Tocantins – SEE/TO.",
  //       createdIn: "25/02/2021",
  //       publishedIn: "26/02/2021",
  //       situation: "Revogado",
  //       revokedBy: "Revogada pela Portaria CEE/TO nº 13, de 09/05/2021."
  //     },
  //     {
  //       type: "Portaria",
  //       number: 13,
  //       ementa: "Regulamenta a gestão do Banco de Avaliadores da Educação Básica – BAEB/TO, no âmbito do Sistema Estadual de Ensino do Tocantins – SEE/TO.",
  //       createdIn: "11/05/2021",
  //       publishedIn: "09/05/2021",
  //       situation: "Em vigor",
  //       revoke: "Revoga a Resolução CEE/TO nº 12, de 25/02/2021."
  //     },
  //     {
  //       type: "Portaria",
  //       number: 11,
  //       ementa: "Regulamenta AAA a gestão do Banco de Avaliadores da Educação Básica – BAEB/TO, no âmbito do Sistema Estadual de Ensino do Tocantins – SEE/TO.",
  //       createdIn: "11/05/2021",
  //       publishedIn: "09/05/2021",
  //       situation: "Em vigor",
  //       changedBy: "Alterada pela Portaria nº 13, de 11/05/2021."
  //     }
  //   ];
  //   return of(fakeValues);
  // }
}