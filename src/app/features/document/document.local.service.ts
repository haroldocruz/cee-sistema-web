import { Injectable } from '@angular/core';

interface ITypeLength {
  decretoLength: number,
  leiLength: number,
  parecerLength: number,
  portariaLength: number,
  resolucaoLength: number,
  otherLength: number,
}

export interface IDoc {
  type: string,
  number: number,
  ementa?: string,
  createdIn?: string,
  publishedIn?: string,
  situation?: string,
  alter?: string,
  changedBy?: string,
  revoke?: string,
  revokedBy?: string,
}

@Injectable({
  providedIn: 'any'
})
export class DocumentLocalService {

  static filter: string;
  static search: string;
  static docList: IDoc[];
  // static docList: Observable<IDoc[]>;

  static typeLength: ITypeLength;

  constructor() {
    this.restart();
  }

  restart() {
    DocumentLocalService.typeLength = {
      decretoLength: 0,
      leiLength: 0,
      parecerLength: 0,
      portariaLength: 0,
      resolucaoLength: 0,
      otherLength: 0,
    }
  }
}
