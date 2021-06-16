import { ModelNameEnum } from './enumerations/ModelNameEnum';
export interface IProfile {
    "_id"?: string;
    "status"?: boolean;
    "name": string;
    "context"?: string;
    "roleCrud"?: IRoleCrud;
    "description"?: string;
}

interface IRoleCrud {
    "_model": string;
    "_modelName": ModelNameEnum;
    "C": boolean;
    "R": boolean;
    "U": boolean;
    "D": boolean;
}

export class Profile implements IProfile {

    status: true;
    name = "Anônimo";
    context = "Other";

    constructor() { }
}
