import { ModelNameEnum } from './enumerations/ModelNameEnum';
export interface IGroup {
  "_id"?: string;
  "status": boolean;
  "name": string;
  "context"?: string;
  "description"?: string;
  "routeList"?: IRoute[];
}

interface IRoute {
    "_id"?: string;
    "name": string;
    "description"?: string;
}

export class Group implements IGroup {

  status = false;
  name = "";

  constructor(){
  }
}
