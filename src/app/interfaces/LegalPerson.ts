export interface ILegalPerson {
  name?: string;
  title?: string;
  description?: string;
  url?: string;
  type?: string;
}

export class LegalPerson implements ILegalPerson {

  name = "";

  constructor() {
  }
}
