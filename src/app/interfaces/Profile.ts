import { ModelNameEnum } from './enumerations/ModelNameEnum';
import { IUser } from './User';
export interface IProfile {
    "_id"?: string;
    "status"?: boolean;
    "name": string;
    "_userList"?: IUser[];
    "_routeList"?: IRoute[];
    "context"?: string;
    "scope"?: IScope;
    "group"?: IGroup;
    "description"?: string;
}

interface IRoute {
  "_id": string;
  "status": string;
  "urn": string;
  "description": string;
}

interface IScope {
  "_id": string;
  "name": string;
}

interface IGroup {
  "_id": string;
  "name": string;
}

export class Profile implements IProfile {

    status: true;
    name = "Anônimo";
    context = "Other";
    scope = { _id: "_id", name: "Other"};
    group = { _id: "_id", name: "Other"};
    _routeList = []

    constructor() { }
}
