import { StatusEnum } from './Status';
import { IAddress, IContact, IPhone } from "./Contact";
import { IProfile } from "./Profile";
import { ENV } from 'src/environments/environment';

export interface IUser {
    "_id"?: string;
    "name"?: string;
    "cpf"?: number;
    "rg"?: IRg;
    "currentProfile"?: IProfile;
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

export interface IRg {
    number: number;
    expeditionDate: Date;
    dispatcherAgency: string;
    uf: string;
}

class Rg { }


export interface ILoginInfo {
    'lastDate'?: Date;
    'actualDate'?: Date;
    'ipClient'?: string;
    "profileLogin"?: IProfile;
    "token"?: string;
    "providerId"?: string;
    "providerKey"?: string;
}

class LoginInfo { }

export interface IDataAccess {
    "username"?: string;
    "password"?: string;
    "groupList"?: IProfile[];
    "group"?: IProfile;
}

export class User implements IUser {

    name: string = "Visitante";
    cpf: number;
    description: string;

    status = false;
    gender = GenderEnum.UNINFORMED;
    maritalStatus = MaritalStatusEnum.UNINFORMED;
    // currentProfile = { id: 'asdf', name: 'Anônimo', status: true }

    // dataAccess = {} as IDataAccess;
    dataAccess = {
        username: (new Date().getTime()).toString(),
        password: ENV.user.defaultPassword,
    };

    // contact = {} as IContact;
    contact: IContact = {
        emailList: [],
        phoneList: [],
        addressList: [] as Array<IAddress>
    }

    constructor() { }

}


