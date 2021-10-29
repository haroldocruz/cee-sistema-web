import { Injectable } from '@angular/core';
import { IDoc } from 'src/app/interfaces/IDoc';

interface ITypeLength {
  institutionListLength: number,
  pubAdmLength: number,
  pubUELength: number,
  privMaintainedLength: number,
  privMaintainerLength: number,
  otherLength: number,
}

@Injectable({
  providedIn: 'any'
})
export class CeeInstitutionLocalService {

  filter: string;
  search: string;
  institutionList: any[];

  typeLength: ITypeLength;

  constructor() {
    this.restart();
  }

  restart() {
    this.typeLength = {
      institutionListLength: 0,
      pubAdmLength: 0,
      pubUELength: 0,
      privMaintainedLength: 0,
      privMaintainerLength: 0,
      otherLength: 0,
    }
  }
}
