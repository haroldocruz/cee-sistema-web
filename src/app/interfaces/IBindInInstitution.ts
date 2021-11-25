import { IInstitution } from "./Institution";
import { IProfile } from "./Profile";
import { IUser } from "./User";

export interface IBindInInstitution {
    _institution?: IInstitution & string;
    institutionName?: string;
    
    status: boolean;
    context: string;
    _user: IUser & string;
    userName: string;
    _profile: IProfile & string;
    profileName: string;
}