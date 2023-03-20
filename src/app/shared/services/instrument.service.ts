import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { ENV } from 'src/environments/environment';
import { AuthService } from '../../auth/auth.service';
import { IInstrument } from '../../interfaces/Instrument';
import { IStatusMessage } from '../../interfaces/IStatusMessage';
import { IQueryConfig } from '../../interfaces/IQueryConfig';
import { IReqBindMember } from '../../interfaces/IReqBindMember';


@Injectable({
    providedIn: 'any'
})
export class InstrumentService {

    instrument: IInstrument;
    instruments: IInstrument[];
    filtro: String;

    baseUrl = `${ENV.api.url}/instrument`;

    constructor(private http: HttpClient) { }

    create(instrument: IInstrument): Observable<IInstrument & IStatusMessage> {
        return this.http.post<IInstrument & IStatusMessage>(this.baseUrl, instrument, { headers: AuthService.headers() });
    }

    read(): Observable<IInstrument[]> {
        return this.http.get<IInstrument[]>(this.baseUrl, { headers: AuthService.headers() });
    }

    readById(id: String): Observable<IInstrument & IStatusMessage> {
        const url = `${this.baseUrl}/${id}`;
        return this.http.get<IInstrument & IStatusMessage>(url, { headers: AuthService.headers() });
    }

    filterOne(instrument: IInstrument, queryConfig: IQueryConfig): Observable<IInstrument & IStatusMessage> {
        const url = `${this.baseUrl}/filterOne`;
        const filter = { filter: instrument, queryConfig }
        return this.http.post<IInstrument & IStatusMessage>(url, filter, { headers: AuthService.headers() });
    }

    filterAll(instrument: IInstrument, queryConfig: IQueryConfig): Observable<IInstrument[] & IStatusMessage> {
        const url = `${this.baseUrl}/filterAll`;
        const filter = { filter: instrument, queryConfig }
        return this.http.post<IInstrument[] & IStatusMessage>(url, filter, { headers: AuthService.headers() });
    }

    update(instrument: IInstrument): Observable<IInstrument & IStatusMessage> {
        const url = `${this.baseUrl}/${instrument._id}`
        return this.http.put<IInstrument & IStatusMessage>(url, instrument, { headers: AuthService.headers() });
    }

    delete(id: String): Observable<IInstrument & IStatusMessage> {
        const url = `${this.baseUrl}/${id}`;
        return this.http.delete<IInstrument & IStatusMessage>(url, { headers: AuthService.headers() });
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
