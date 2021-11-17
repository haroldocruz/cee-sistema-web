import { IContact } from './Contact';
import { AdministrativeSphereEnum } from './enumerations/administrativeSphereEnum';
import { InstitutionTypeEnum } from './enumerations/InstitutionTypeEnum';
import { IEvidence } from './Evidence';
import { ILegalPerson } from './LegalPerson';

interface IFundaments {
  personalProfile: String;
  mission: String;
  vision: String;
  values: String;
}
export interface IGroup {
  _id?: String;
  institutionType?: String;
  socialReason?: String;
  name?: String;
  initials?: String;
  cnpj?: Number;
  administrativeSphere?: String;
  legalPerson?: ILegalPerson;
  legalAct?: IEvidence[];
  maintainer?: IGroup;
  contact?: IContact;
  // evaluationResultList?: Eval..Result[];
  // courseList?: Course[];
  // memberList?: User[];
  description?: String;
  fundaments?: IFundaments;
}

export class Group implements IGroup {

  status = false;
  name = "";
  administrativeSphere = AdministrativeSphereEnum.UNINFORMED;
  institutionType = InstitutionTypeEnum.UNINFORMED;

  constructor() {
  }
}
