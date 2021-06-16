import { IProfile, Profile } from './../../interfaces/Profile';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { ENV } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  profile: IProfile;
  profiles: IProfile[];
  filtro: string;

  baseUrl = `${ENV.api.url}/profile`;

  private headers = new HttpHeaders({
    //TODO
    // 'Authorization': localStorage.getItem('token'),
    // 'Content-Type': 'application/json'
  });

  constructor(private http: HttpClient) {
    this.index();
    this.profile = new Profile();
  }

  index() {
    this.read().subscribe((data) => {
      this.profiles = data;
    })
  }

  edit(profile: IProfile | null){
    this.profile = (profile) ? profile : new Profile();
  }

  create(profile: IProfile): Observable<IProfile>{
    return this.http.post<IProfile>(this.baseUrl, profile);
  }

  read(): Observable<IProfile[]> {
    return this.http.get<IProfile[]>(this.baseUrl, { headers: this.headers });
  }

  readById(id: string): Observable<IProfile> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<IProfile>(url);
  }

  update(profile: IProfile): Observable<IProfile> {
    const url = `${this.baseUrl}/${profile._id}`
    return this.http.put<IProfile>(url, profile);
  }

  delete(id: string): Observable<IProfile> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<IProfile>(url);
  }

}
