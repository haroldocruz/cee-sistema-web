export interface IPhone {
  number?: number;
  description?: string;
}

export class Phone implements IPhone {
  number: number;
  description: string;
}

export interface IEmail {
  address?: string;
  description?: string;
}

export class Email implements IEmail {
  address: string;
  description: string;
}

export enum TypePhoneEnum {
  CELULAR = "Celular",
  RESIDENCIAL = "Residencial",
  TRABALHO = "Trabalho",
  RURAL = "Rural",
  COMERCIAL = "Comercial",
  RECADO = "Recado"
}

export interface IAddress {
  "country"?: string;
  "state"?: string;
  "city"?: string;
  "district"?: string;
  "place"?: string;
  "number"?: number;
  "zipcode"?: number;
  "complement"?: string;
  "description"?: string;
}

export class Address implements IAddress {
  country: string = "Brasil";
  state: string = "Tocantins";
  city: string;
  district: string;
  place: string;
  number: number;
  zipcode: number;
  complement: string;
  description: string;
}

export interface IContact {
  emailList?: IEmail[];
  phoneList?: IPhone[];
  addressList?: IAddress[];
}

export class Contact implements IContact {
  addressList = []
  emailList = []
  phoneList = []

}
