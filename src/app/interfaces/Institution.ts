import { IContact } from './Contact';
import { AdministrativeSphereEnum } from './enumerations/administrativeSphereEnum';
import { ContextEnum } from './enumerations/ContextEnum';
import { InstitutionTypeEnum } from './enumerations/InstitutionTypeEnum';
import { IEvidence } from './Evidence';
import { ILegalPerson } from './LegalPerson';
import { IProfile } from './Profile';
import { IUser } from './User';

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

export interface IMember {
  status: boolean;
  context: string;
  _user: IUser & string;
  userName: string;
  _profile: IProfile & string;
  profileName: string;
  _institution: IInstitution & string;
  institutionName: string;
}

export interface IInstitution {
  _id?: string;
  context?: string;
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
  memberList?: IMember[];
  description?: string;
  fundaments?: IFundaments;
}

export class Institution implements IInstitution {

  status = false;
  name = "";
  context = ContextEnum.UNINFORMED;
  administrativeSphere = AdministrativeSphereEnum.UNINFORMED;
  institutionType = InstitutionTypeEnum.UNINFORMED;
  fundaments = new Fundaments();

  constructor() {
  }
}
