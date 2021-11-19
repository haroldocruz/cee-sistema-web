import { IContact } from './Contact';
import { AdministrativeSphereEnum } from './enumerations/administrativeSphereEnum';
import { InstitutionTypeEnum } from './enumerations/InstitutionTypeEnum';
import { IEvidence } from './Evidence';
import { ILegalPerson } from './LegalPerson';

export interface IFundaments {
  personalProfile?: string;
  mission?: string;
  vision?: string;
  values?: string;
}

export class Fundaments implements IFundaments {

  personalProfile: string;
  mission: string;
  vision: string;
  values: string;
  
}

export interface IInstitution {
  _id?: string;
  institutionType?: string;
  socialReason?: string;
  name?: string;
  initials?: string;
  cnpj?: number;
  administrativeSphere?: string;
  legalPerson?: ILegalPerson;
  legalActList?: IEvidence[];
  maintainer?: IInstitution;
  contact?: IContact;
  // evaluationResultList?: Eval..Result[];
  // courseList?: Course[];
  // memberList?: User[];
  description?: string;
  fundaments?: IFundaments;
}

export class Institution implements IInstitution {

  status = false;
  name = "";
  administrativeSphere = AdministrativeSphereEnum.UNINFORMED;
  institutionType = InstitutionTypeEnum.UNINFORMED;
  fundaments = new Fundaments();

  constructor() {
  }
}
