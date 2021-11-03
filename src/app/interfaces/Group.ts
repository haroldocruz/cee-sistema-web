import { IContact } from './Contact';
import { ILegalAct } from './LegalAct';
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
  legalAct?: ILegalAct[];
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

  constructor() {
  }
}
