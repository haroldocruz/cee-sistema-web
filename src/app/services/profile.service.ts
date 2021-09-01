import { Profile } from 'src/app/interfaces/Profile';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ENV } from "./../../environments/environment";
import { IProfile } from './../interfaces/Profile';

@Injectable({
    providedIn: 'any'
})
export class ProfileService {

    private headers = new HttpHeaders({
        // 'Authorization': localStorage.getItem('token'),
        // 'Content-Type': 'application/json'
    });

    baseUrl = `${ENV.api.url}/profile`
    profile: IProfile;
    profiles: IProfile[];
    filtro: string;

    constructor(private http: HttpClient) {
        this.index();
        this.profile = new Profile();
        this.profiles = [];
        this.filtro = "";
    }

    index() {
        this.read().subscribe((data) => {
            this.profiles = data;
        });
    }

    edit(profile: IProfile | null){
        this.profile = (profile) ? profile : new Profile();
      }

    create(): void {
        this.http.post<IProfile>(this.baseUrl, this.profile).subscribe(() => {
            this.index();
        });
    }

    read(): Observable<IProfile[]> {
        return this.http.get<IProfile[]>(this.baseUrl, { headers: this.headers });
    }

    readById(id: string): Observable<IProfile> {
        const url = `${this.baseUrl}/${id}`;
        return this.http.get<IProfile>(url);
    }

    readFilter(filter: IProfile): Observable<IProfile[]> {
        const url = `${this.baseUrl}/filter`;
        return this.http.post<IProfile[]>(url, filter);
    }

    update(profile: IProfile): void {
        const url = `${this.baseUrl}/${profile._id}`
        this.http.post<IProfile>(url, profile).subscribe(() => {
            this.index();
        });
    }

    delete(id: string): void {
        const url = `${this.baseUrl}/${id}`;
        this.http.delete<IProfile>(url).subscribe(() => {
            this.index();
        });
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
