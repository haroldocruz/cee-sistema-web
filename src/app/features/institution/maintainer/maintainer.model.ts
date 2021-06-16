import { IContact } from './../../../interfaces/Contact';

export interface IMaintainer {
  "id"?: string;
  "name": string;
  "legalAct": {};
  "socialReason": string;
  "other"?: {}[];
  "contact": IContact;
}

export class Maintainer implements IMaintainer {
  name = "";
  legalAct = {};
  socialReason = "";
  contact = {} as IContact;

  constructor(){}
}
