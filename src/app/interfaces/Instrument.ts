import { IAct } from "./Act";
import { SituationProcessEnum } from "./enumerations/SituationProcessEnum";
import { IInstitution } from "./Institution";

interface ISgd {
    number: string;
    autuationDate: Date;
}

export interface IInstrument {
    "_id"?: string;
    "orderCode"?: string;
    "title": string;
    "description"?: string;
    // "modality": string; //Enum
    "evaluationType"?: string; //Enum
    "act": string; //Enum
}

export class Instrument implements IInstrument {

    "orderCode": "";
    "title": "";
    "description": "";
    // "modality": ""; //Enum
    "evaluationType": ""; //Enum
    "act": ""; //Enum

    constructor() { }
}
