
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { ENV } from 'src/environments/environment';
import _cloneDeep from "lodash/cloneDeep";
import { IProfile } from '../../interfaces/Profile';
import { IUser, User } from '../../interfaces/User';
import { NotificationService } from './notification.service';
import { AuthService, IHttpHeadersOptions } from '../../auth/auth.service';
import { IStatusMessage } from '../../interfaces/IStatusMessage';
import { IQueryConfig } from '../../interfaces/IQueryConfig';

export interface IUserDataLogin {
    username: string;
    password: string;
}

@Injectable({
    providedIn: 'any'
})
export class UserService {

    baseUrl = `${ENV.api.url}/user`;

    constructor(
        private http: HttpClient,
        private notify: NotificationService
    ) { }

    create(user: IUser): Observable<IUser & IStatusMessage> {
        return this.http.post<IUser & IStatusMessage>(this.baseUrl, user, { headers: AuthService.headers() });
    }

    read(): Observable<IUser[] & IStatusMessage> {
        return this.http.get<IUser[] & IStatusMessage>(this.baseUrl, { headers: AuthService.headers() });
    }

    readById(id: string): Observable<IUser & IStatusMessage> {
        const url = `${this.baseUrl}/${id}`;
        return this.http.get<IUser & IStatusMessage>(url, { headers: AuthService.headers() });
    }

    filterOne(user: IUser, queryConfig: IQueryConfig): Observable<IUser & IStatusMessage> {
        const url = `${this.baseUrl}/filterOne`;
        const filter = { filter: user, queryConfig }
        return this.http.post<IUser & IStatusMessage>(url, filter, { headers: AuthService.headers() });
    }

    filterAll(user: IUser, queryConfig: IQueryConfig): Observable<IUser[] & IStatusMessage> {
        const url = `${this.baseUrl}/filterAll`;
        const filter = { filter: user, queryConfig }
        return this.http.post<IUser[] & IStatusMessage>(url, filter, { headers: AuthService.headers() });
    }

    uploadImage(user: IUser, data: FormData) {
        // const headers: IHttpHeadersOptions = { "Content-Type": 'multipart/form-data' }
        const url = `${this.baseUrl}/image/${user._id}`
        return this.http.post(url, data);
    }

    update(user: IUser): Observable<IUser & IStatusMessage> {
        const url = `${this.baseUrl}/${user._id}`
        return this.http.put<IUser & IStatusMessage>(url, user, { headers: AuthService.headers() });
    }

    delete(id: string): Observable<IUser & IStatusMessage> {
        const url = `${this.baseUrl}/${id}`;
        return this.http.delete<IUser & IStatusMessage>(url, { headers: AuthService.headers() });
    }

}
