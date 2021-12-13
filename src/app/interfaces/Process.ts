import { IAct } from "./Act";
import { SituationProcessEnum } from "./enumerations/SituationProcessEnum";
import { IInstitution } from "./Institution";

interface ISgd {
    number: string;
    autuationDate: Date;
}

export interface IProcess {
    _id?: string;
    situation: string;
    act: IAct;
    sgd?: ISgd;
    _interestedList: IInstitution[];
    _dreje?: IInstitution;
    description?: string;
}

export class Process implements IProcess {

    situation = SituationProcessEnum.STARTED;
    act = null;
    _interestedList = [];
    sgd = {
        number: null,
        autuationDate: new Date()
    }

    constructor() { }
}
