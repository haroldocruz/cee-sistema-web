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
    
    "_roleList"?: IRole[];

    __metadata?: IMetadata;
}

export interface IRole {
  "_id": string;
  "status": boolean;
  "urn": string;
  "description": string;
}

export class Profile implements IProfile {

    status: IProfile['status'] = false;
    name: IProfile['name'] = "";
    context: IProfile['context'] = ContextEnum.UNINFORMED;
    _roleList: IProfile['_roleList'] = [];

    constructor() { }
}
