import { IMetadata } from './Metadata';

interface IRoles {
  "create"?: boolean;
  "read"?: boolean;
  "update"?: boolean;
  "delete"?: boolean;
}

export interface IRoute {
  "_id"?: string;
  "status": boolean;
  "urn": string;
  "description": string;
  "roles": IRoles;
  __metadata?: IMetadata;
}

export class Route implements IRoute {

  status: true;
  name = "Anônimo";
  urn: "/route404";
  description: string;
  roles: IRoles;
  __metadata?: IMetadata;

  constructor() { }
}
