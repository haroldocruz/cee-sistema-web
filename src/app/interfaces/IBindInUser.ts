import { IInstitution } from "./Institution";
import { IProfile } from "./Profile";
import { IUser } from "./User";

export interface IBindInUser {
    _user?: IUser & string;
    userName?: string;
    
    status: boolean;
    context: string;
    _profile: IProfile & string;
    profileName: string;
    _institution: IInstitution & string;
    institutionName: string;
}