import { IAddress, IContact } from "./Contact";
import { ENV } from 'src/environments/environment';
import { IBindInUser } from './IBindInUser';

export interface IUser {
    "_id"?: string;
    "image"?: IUserImage;
    "name"?: string;
    "cpf"?: number;
    "rg"?: IRg;
    "gender"?: string; //enum [masculino, feminino]
    "maritalStatus"?: string; //enum [solteiro(a), casado(a), ...]
    "birthDate"?: Date;
    "status"?: boolean;
    "contact"?: IContact;
    "loginInfo"?: ILoginInfo;
    "dataAccess"?: IDataAccess;
    "description"?: string;
}

export enum GenderEnum {
    FEMALE = "Feminino",
    MALE = "Masculino",
    UNINFORMED = "Não informado",
}

export enum MaritalStatusEnum {
    UNINFORMED = "Não informado",
    SINGLE = "Solteiro(a)",
    MARIED = "Casado(a)",
    DIVORCED = "Divorciado(a)",
    WIDOWER = "Viúvo(a)",
}

export interface IUserImage {
    path?: string;
}

export interface IRg {
    number: number;
    expeditionDate: Date;
    dispatcherAgency: string;
    uf: string;
}

class Rg { }


export interface ILoginInfo {
    'accessCount'?: number;
    'lastDate'?: Date;
    'actualDate'?: Date;
    'ipClient'?: string;
    "currentBind"?: IBindInUser;
    "token"?: string;
    "providerId"?: string;
    "providerKey"?: string;
}

class LoginInfo { }

export interface IDataAccess {
    "username"?: string;
    "password"?: string;
    "bindDefault"?: IBindInUser;
    "bindList"?: IBindInUser[];
}

export class User implements IUser {

    name: string = "Visitante";
    cpf: number;
    description: string;

    status = false;
    gender = GenderEnum.UNINFORMED;
    maritalStatus = MaritalStatusEnum.UNINFORMED;
    dataAccess = {
        username: (new Date().getTime()).toString(),
        password: ENV.user.defaultPassword,
    };
    contact: IContact = {
        emailList: [],
        phoneList: [],
        addressList: [] as Array<IAddress>
    }

    constructor() { }

}


