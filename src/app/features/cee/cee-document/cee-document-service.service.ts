import { Injectable } from '@angular/core';
import { IDoc } from 'src/app/interfaces/IDoc';

interface ITypeLength {
  decretoLength: number,
  leiLength: number,
  parecerLength: number,
  portariaLength: number,
  resolucaoLength: number,
  otherLength: number,
}

@Injectable({
  providedIn: 'root'
})
export class CeeDocumentLocalService {

  filter: string;
  search: string;
  docList: IDoc[];

  typeLength: ITypeLength = {
    decretoLength: 0,
    leiLength: 0,
    parecerLength: 0,
    portariaLength: 0,
    resolucaoLength: 0,
    otherLength: 0,
  }

  constructor() { }
}
