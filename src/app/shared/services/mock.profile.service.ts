import { Profile } from 'src/app/interfaces/Profile';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ENV } from "../../../environments/environment";
import { IProfile } from '../../interfaces/Profile';

@Injectable({
    providedIn: 'any'
})
export class ProfileService {

    profileList: IProfile[];

    constructor() {
        this.profileList = [
            {
                _id: '1',
                name: 'Administrador',
                context: 'cee',
                status: true,
                scope: { _id: '1', name: 'Conselho Estadual de Educação' },
                group: { _id: '1', name: 'Câmara da Educação Básica' },
                description: 'Aqui vai uma descrição',
                _userList: [],
                _routeList: []
            }
        ];
    }

    create(): void {
    }

    read(): Observable<IProfile[]> {
        return of(this.profileList);
    }

    readById(id: string): Observable<IProfile> {
        return of(this.profileList.find(profile => profile._id === id));
    }

    // readFilter(filter: IProfile): Observable<IProfile[]> {
    //     return of(this.profileList.filter(profile => profile === filter));
    // }

    update(profile: IProfile): void {
    }

    delete(id: string): void {
    }

    // create(): Observable<IProfile>{
    //   return this.http.post<IProfile>(this.baseUrl, this.profile);
    // }

    // update(profile: IProfile): Observable<IProfile>{
    //   const url = `${this.baseUrl}/${profile._id}`
    //   return this.http.post<IProfile>(url, profile);
    // }

    // delete(id: string): Observable<IProfile>{
    //   const url = `${this.baseUrl}/${id}`;
    //   return this.http.delete<IProfile>(url);
    // }

}
