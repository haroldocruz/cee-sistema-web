export interface ILegalAct {
  name?: string;
  title?: string;
  description?: string;
  url?: string;
  type?: string;
}

export class LegalAct implements ILegalAct {

  name: string;
  title: string;
  description: string;
  url: string;
  type: string;

  constructor() {
  }
}
