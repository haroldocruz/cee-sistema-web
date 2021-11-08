import { IContact } from './Contact';
import { AdministrativeSphereEnum } from './enumerations/administrativeSphereEnum';
import { InstitutionTypeEnum } from './enumerations/InstitutionTypeEnum';
import { ILegalAct } from './LegalAct';
import { ILegalPerson } from './LegalPerson';

export interface IFundaments {
  personalProfile?: String;
  mission?: String;
  vision?: String;
  values?: String;
}

export class Fundaments implements IFundaments {

  personalProfile: String;
  mission: String;
  vision: String;
  values: String;
  
}

export interface IInstitution {
  _id?: String;
  institutionType?: String;
  socialReason?: String;
  name?: String;
  initials?: String;
  cnpj?: Number;
  administrativeSphere?: String;
  legalPerson?: ILegalPerson;
  legalActList?: ILegalAct[];
  maintainer?: IInstitution;
  contact?: IContact;
  // evaluationResultList?: Eval..Result[];
  // courseList?: Course[];
  // memberList?: User[];
  description?: String;
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
