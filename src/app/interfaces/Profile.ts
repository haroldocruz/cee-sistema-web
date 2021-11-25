import { ContextEnum } from './enumerations/ContextEnum';
import { ModelNameEnum } from './enumerations/ModelNameEnum';
import { IInstitution } from './Institution';
import { IMetadata } from './Metadata';
import { IUser } from './User';

export interface IProfile {
  
    "_id"?: string;
    
    "context"?: string;
    "status"?: boolean;
    "name"?: string;
    "description"?: string;
    
    "_routeList"?: IRoute[];
    // "_userList"?: IUser[];
    // "_institutionList"?: IInstitution[];
    // "scope"?: any;
    // "group"?: IGroup;

    __metadata?: IMetadata;
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
    context = ContextEnum.UNINFORMED;
    // scope = { _id: "_id", name: "Other"};
    group = { _id: "_id", name: "Other"};
    _routeList = [];

    constructor() { }
}
