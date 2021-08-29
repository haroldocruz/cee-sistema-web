import { Component, OnInit } from '@angular/core';

interface IDoc {
  type: string;
  number: number;
  ementa: string;
  criadaEm: string;
  publicadaEm: string;
  observation?: string;
}

@Component({
  selector: 'app-cee-document',
  templateUrl: './cee-document.component.html',
  styleUrls: ['./cee-document.component.less']
})
export class CeeDocumentComponent implements OnInit {

  mockDocList: IDoc[];

  constructor() { }

  ngOnInit(): void {
    this.mockDocListInit();
  }

  mockDocListInit() {
    this.mockDocList = [
      {
        type: "Resolução",
        number: 12,
        ementa: "Regulamenta a gestão do Banco de Avaliadores da Educação Básica – BAEB/TO, no âmbito do Sistema Estadual de Ensino do Tocantins – SEE/TO.",
        criadaEm: "25/02/2021",
        publicadaEm: "26/02/2021"
      },
      {
        type: "Portaria",
        number: 13,
        ementa: "Regulamenta a gestão do Banco de Avaliadores da Educação Básica – BAEB/TO, no âmbito do Sistema Estadual de Ensino do Tocantins – SEE/TO.",
        criadaEm: "11/05/2021",
        publicadaEm: "09/05/2021"
      }
    ]
  }

}
