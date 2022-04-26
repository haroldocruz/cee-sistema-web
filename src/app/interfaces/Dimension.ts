export interface IDimension {
    "_id"?: string;
    "orderCode"?: string;
    "title": string;
    "description"?: string;
}

export class Dimension implements IDimension {

    "orderCode": "";
    "title": "";
    "description": "";

    constructor() { }
}
