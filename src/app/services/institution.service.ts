import { IInstitution, Institution } from './../interfaces/Institution';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { ENV } from 'src/environments/environment';
import { AuthService } from '../auth/auth.service';


@Injectable({
  providedIn: 'any'
})
export class InstitutionService {

  institution: IInstitution;
  institutions: IInstitution[];
  filtro: String;

  baseUrl = `${ENV.api.url}/institution`;

  // private headers = new HttpHeaders({
  //   //TODO
  //   // 'Authorization': localStorage.getItem('token'),
  //   // 'Content-Type': 'application/json'
  // });

  constructor(private http: HttpClient) {
    this.institution = new Institution();
  }

  index() {
    this.read().subscribe((data) => {
      this.institutions = data;
    })
  }

  edit(institution: IInstitution | null){
    this.institution = (institution) ? institution : new Institution();
  }

  create(institution: IInstitution): Observable<IInstitution>{
    return this.http.post<IInstitution>(this.baseUrl, institution, { headers: AuthService.headers() });
  }

  read(): Observable<IInstitution[]> {
    return this.http.get<IInstitution[]>(this.baseUrl, { headers: AuthService.headers() });
  }

  readById(id: String): Observable<IInstitution> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<IInstitution>(url, { headers: AuthService.headers() });
  }

  update(institution: IInstitution): Observable<IInstitution> {
    const url = `${this.baseUrl}/${institution._id}`
    return this.http.put<IInstitution>(url, institution, { headers: AuthService.headers() });
  }

  delete(id: String): Observable<IInstitution> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<IInstitution>(url, { headers: AuthService.headers() });
  }

}