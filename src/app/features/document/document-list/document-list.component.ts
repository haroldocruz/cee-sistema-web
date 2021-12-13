import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DocTypeEnum } from 'src/app/interfaces/IDoc';
import { DocumentLocalService, IDoc } from '../document.local.service';

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
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.less']
})
export class DocumentListComponent implements OnInit {

  DocTypeEnum: typeof DocTypeEnum;
  filteredCount = { count: 0 };

  DocumentLocalService = DocumentLocalService;

  constructor(private documentLocalService: DocumentLocalService) { }

  ngOnInit(): void {
    this.DocTypeEnum = DocTypeEnum;
    this.mockDocListInit();
  }

  mockDocListInit() {

    // this.DocumentLocalService.docList = this.getDocList();
    DocumentLocalService.docList = [
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

    this.documentLocalService.restart();

    DocumentLocalService.docList.map((e) => {
      if (e.type == this.DocTypeEnum.DECRETO) DocumentLocalService.typeLength.decretoLength += 1;
      if (e.type == this.DocTypeEnum.LEI) DocumentLocalService.typeLength.leiLength += 1;
      if (e.type == this.DocTypeEnum.PARECER) DocumentLocalService.typeLength.parecerLength += 1;
      if (e.type == this.DocTypeEnum.PORTARIA) DocumentLocalService.typeLength.portariaLength += 1;
      if (e.type == this.DocTypeEnum.RESOLUCAO) DocumentLocalService.typeLength.resolucaoLength += 1;
      if (e.type == this.DocTypeEnum.OTHER) DocumentLocalService.typeLength.otherLength += 1;
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