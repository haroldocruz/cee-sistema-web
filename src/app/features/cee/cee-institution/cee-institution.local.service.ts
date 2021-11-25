import { Injectable } from '@angular/core';
import { IDoc } from 'src/app/interfaces/IDoc';
import { IInstitution } from 'src/app/interfaces/Institution';

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

  institutionList: IInstitution[];

  filter: string;
  search: string;

  constructor() {
  }
}
