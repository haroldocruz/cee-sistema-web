import { IUser } from './User';

export interface IMetadata {
  "id": string;
  "_model": string;
  "modelName": string;
  "_createdBy": IUser;
  "createdAt": Date;
  "_modifiedBy": IUser;
  "modifiedAt": Date;
  "_owner": IUser;
}
