import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { ENV } from 'src/environments/environment';
import { AuthService } from '../../auth/auth.service';
import { IProcess } from '../../interfaces/Process';
import { IStatusMessage } from '../../interfaces/IStatusMessage';
import { IQueryConfig } from '../../interfaces/IQueryConfig';
import { IReqBindMember } from '../../interfaces/IReqBindMember';


@Injectable({
    providedIn: 'any'
})
export class ProcessService {

    process: IProcess;
    processs: IProcess[];
    filtro: String;

    baseUrl = `${ENV.api.url}/process`;

    constructor(private http: HttpClient) { }

    create(process: IProcess): Observable<IProcess & IStatusMessage> {
        return this.http.post<IProcess & IStatusMessage>(this.baseUrl, process, { headers: AuthService.headers() });
    }

    read(): Observable<IProcess[]> {
        return this.http.get<IProcess[]>(this.baseUrl, { headers: AuthService.headers() });
    }

    readById(id: String): Observable<IProcess & IStatusMessage> {
        const url = `${this.baseUrl}/${id}`;
        return this.http.get<IProcess & IStatusMessage>(url, { headers: AuthService.headers() });
    }

    filterOne(process: IProcess, queryConfig: IQueryConfig): Observable<IProcess & IStatusMessage> {
        const url = `${this.baseUrl}/filterOne`;
        const filter = { filter: process, queryConfig }
        return this.http.post<IProcess & IStatusMessage>(url, filter, { headers: AuthService.headers() });
    }

    filterAll(process: IProcess, queryConfig: IQueryConfig): Observable<IProcess[] & IStatusMessage> {
        const url = `${this.baseUrl}/filterAll`;
        const filter = { filter: process, queryConfig }
        return this.http.post<IProcess[] & IStatusMessage>(url, filter, { headers: AuthService.headers() });
    }

    update(process: IProcess): Observable<IProcess & IStatusMessage> {
        const url = `${this.baseUrl}/${process._id}`
        return this.http.put<IProcess & IStatusMessage>(url, process, { headers: AuthService.headers() });
    }

    delete(id: String): Observable<IProcess & IStatusMessage> {
        const url = `${this.baseUrl}/${id}`;
        return this.http.delete<IProcess & IStatusMessage>(url, { headers: AuthService.headers() });
    }

    // bindMember(reqBindMember: IReqBindMember): Observable<IStatusMessage> {
    //     const uri = `${this.baseUrl}/bindMember`;
    //     return this.http.post<IStatusMessage>(uri, reqBindMember, { headers: AuthService.headers() });
    // }

    // unBindMember(reqBindMember: IReqBindMember): Observable<IStatusMessage> {
    //     const uri = `${this.baseUrl}/unbindMember`;
    //     return this.http.post<IStatusMessage>(uri, reqBindMember, { headers: AuthService.headers() });
    // }

}
