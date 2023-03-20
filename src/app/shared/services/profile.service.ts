import { Profile } from 'src/app/interfaces/Profile';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ENV } from "../../../environments/environment";
import { IProfile } from '../../interfaces/Profile';
import { IMessageResponse } from './send-mail.service';
import { IStatusMessage } from '../../interfaces/IStatusMessage';
import { AuthService } from '../../auth/auth.service';
import { IReqBindMember } from '../../interfaces/IReqBindMember';

export interface IBindingProfileUser {
    profileId: string;
    userId: string;
}

@Injectable({
    providedIn: 'any'
})
export class ProfileService {

    baseUrl = `${ENV.api.url}/profile`
    // profile: IProfile;
    // profiles: IProfile[];
    // filtro: string;

    constructor(private http: HttpClient) {
        // this.index();
        // this.profile = new Profile();
        // this.profiles = [];
        // this.filtro = "";
    }

    // index() {
    //     this.read().subscribe((data) => {
    //         this.profiles = data;
    //     });
    // }

    // edit(profile: IProfile | null) {
    //     this.profile = (profile) ? profile : new Profile();
    // }

    create(profile: IProfile): Observable<IProfile & IStatusMessage> {
        return this.http.post<IProfile & IStatusMessage>(this.baseUrl, profile, { headers: AuthService.headers() });
    }

    read(): Observable<IProfile[] & IStatusMessage> {
        return this.http.get<IProfile[] & IStatusMessage>(this.baseUrl, { headers: AuthService.headers() });
    }

    readById(id: string): Observable<IProfile & IStatusMessage> {
        const url = `${this.baseUrl}/${id}`;
        return this.http.get<IProfile & IStatusMessage>(url, { headers: AuthService.headers() });
    }

    readFilter(filter: any): Observable<IProfile[] & IStatusMessage> {
        const url = `${this.baseUrl}/filter`;
        return this.http.post<IProfile[] & IStatusMessage>(url, filter, { headers: AuthService.headers() });
    }

    update(profile: IProfile): Observable<IStatusMessage> {
        const url = `${this.baseUrl}/${profile._id}`
        return this.http.put<IStatusMessage>(url, profile, { headers: AuthService.headers() });
    }

    delete(id: string): Observable<IStatusMessage> {
        const url = `${this.baseUrl}/${id}`;
        return this.http.delete<IStatusMessage>(url, { headers: AuthService.headers() });
    }

}
