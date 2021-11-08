import { AuthService } from './../../../auth/auth.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ENV } from './../../../../environments/environment';
import { IMaintainer, Maintainer } from './maintainer.model';

@Injectable({
  providedIn: 'root'
})
export class MaintainerService {
  baseUrl = `${ENV.api.url}/maintainer`;

  static maintainer: IMaintainer;
  static maintainers: IMaintainer[];

  // private headers = new HttpHeaders({
  //   //TODO
  //   // 'Authorization': localStorage.getItem('token'),
  //   // 'Content-Type': 'application/json'
  // });

  constructor(private http: HttpClient) {
    // if (AuthService.currentProfile.name === "Representante Legal")
      this.index2();
    // if (AuthService.currentProfile.name === "Administrador")
    //   this.index();
  }

  index() {
    this.read().subscribe((data) => {
      MaintainerService.maintainers = data;
    })
  }

  index2() {
    this.readByLegalRepresentativeId(AuthService.user._id).subscribe((data) => {
      MaintainerService.maintainer = data;
    })
  }

  edit(maintainer: IMaintainer | null) {
    MaintainerService.maintainer = (maintainer) ? maintainer : new Maintainer();
  }

  create(maintainer: IMaintainer): Observable<IMaintainer> {
    return this.http.post<IMaintainer>(this.baseUrl, maintainer);
  }

  read(): Observable<IMaintainer[]> {
    return this.http.get<IMaintainer[]>(this.baseUrl, { headers: AuthService.headers() });
  }

  readById(id: string): Observable<IMaintainer> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<IMaintainer>(url);
  }

  readByLegalRepresentativeId(id: string): Observable<IMaintainer> {
    const url = `${this.baseUrl}`;
    return this.http.post<IMaintainer>(url, { "_legalRepresentative": id });
  }

  update(maintainer: IMaintainer): Observable<IMaintainer> {
    const url = `${this.baseUrl}/${maintainer.id}`
    return this.http.put<IMaintainer>(url, maintainer);
  }

}
