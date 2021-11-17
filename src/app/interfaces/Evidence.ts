export interface IEvidence {
  name?: string;
  title?: string;
  description?: string;
  url?: string;
  type?: string;
}

export class Evidence implements IEvidence {

  name: string;
  title: string;
  description: string;
  url: string;
  type: string;

  constructor() {
  }
}
