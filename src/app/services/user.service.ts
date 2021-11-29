
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { ENV } from 'src/environments/environment';
import _cloneDeep from "lodash/cloneDeep";
import { IProfile } from '../interfaces/Profile';
import { IUser, User } from '../interfaces/User';
import { NotificationService } from './notification.service';
import { AuthService } from '../auth/auth.service';
import { IStatusMessage } from '../interfaces/IStatusMessage';

export interface IUserDataLogin {
    username: string;
    password: string;
}

@Injectable({
    providedIn: 'any'
})
export class UserService {

    currentProfile: IProfile;
    user: IUser;
    users: IUser[];
    filtro: string;

    baseUrl = `${ENV.api.url}/user`;

    constructor(
        private http: HttpClient,
        private notify: NotificationService
    ) {
        this.user = new User();
    }

    index() {
        this.read().subscribe((data) => {
            this.users = data;
        }, (error) => {
            this.notify.showError(error.error.message, "Erro!");
        });
    }

    // headers() {
    //     return {
    //         'authorization': AuthService.user?.loginInfo?.token,
    //         'Content-Type': 'application/json'
    //     };
    // }

    edit(user: IUser | null) {
        this.user = (user) ? _cloneDeep(user) : new User();
    }

    create(user: IUser): Observable<IUser & IStatusMessage> {
        return this.http.post<IUser & IStatusMessage>(this.baseUrl, user, { headers: AuthService.headers() });
    }

    read(): Observable<IUser[]> {
        return this.http.get<IUser[]>(this.baseUrl, { headers: AuthService.headers() });
    }

    readById(id: string): Observable<IUser & IStatusMessage> {
        const url = `${this.baseUrl}/${id}`;
        return this.http.get<IUser & IStatusMessage>(url, { headers: AuthService.headers() });
    }

    filterOne(user: IUser): Observable<IUser & IStatusMessage> {
        const url = `${this.baseUrl}/filterOne`;
        return this.http.post<IUser & IStatusMessage>(url, user, { headers: AuthService.headers() });
    }

    filterAll(user: IUser): Observable<IUser[] & IStatusMessage> {
        const url = `${this.baseUrl}/filterAll`;
        return this.http.post<IUser[] & IStatusMessage>(url, user, { headers: AuthService.headers() });
    }

    update(user: IUser): Observable<IUser & IStatusMessage> {
        const url = `${this.baseUrl}/${user._id}`
        return this.http.put<IUser & IStatusMessage>(url, user, { headers: AuthService.headers() });
    }

    delete(id: string): Observable<IUser & IStatusMessage> {
        const url = `${this.baseUrl}/${id}`;
        return this.http.delete<IUser & IStatusMessage>(url, { headers: AuthService.headers() });
    }

    default(resp: Observable<IUser & IStatusMessage>) {

        resp.subscribe((data) => {
            if (data.statusCode >= 400) {
                console.log(data)
                this.notify.showError(data.statusMessage, `Erro ${data.statusCode}!`);
                return;
            }
            this.notify.showSuccess("Ação realizada com sucesso!", "Ok!")
            this.index();
        }, (error) => {
            this.notify.showError("Não foi possível realizar esta ação!", "Erro!");
        });
    }

    isConfirm(question: string = "Confirmar ação?") {
        if (!confirm(question)) {
            this.notify.showWarning("Ação cancelada!", "Ops!");
            return false;
        }
        return true;
    }

}
