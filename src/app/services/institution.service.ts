import { IInstitution, Institution } from './../interfaces/Institution';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { ENV } from 'src/environments/environment';
import { AuthService } from '../auth/auth.service';
import { IStatusMessage } from '../interfaces/IStatusMessage';
import { IQueryConfig } from '../interfaces/IQueryConfig';
import { IReqBindMember } from '../interfaces/IReqBindMember';


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

  create(institution: IInstitution): Observable<IInstitution & IStatusMessage>{
    return this.http.post<IInstitution & IStatusMessage>(this.baseUrl, institution, { headers: AuthService.headers() });
  }

  bindMember(reqBindMember: IReqBindMember): Observable<IStatusMessage> {
      const uri = `${this.baseUrl}/bindMember`;

      reqBindMember._user = reqBindMember._user._id ? reqBindMember._user._id: reqBindMember._user;
      reqBindMember._institution = reqBindMember._institution._id ? reqBindMember._institution._id: reqBindMember._institution;
      reqBindMember._profile = reqBindMember._profile._id ? reqBindMember._profile._id: reqBindMember._profile;
      
      return this.http.post<IStatusMessage>(uri, reqBindMember, { headers: AuthService.headers() });
  }

  unbindMember(reqBindMember: IReqBindMember): Observable<IStatusMessage> {
      const uri = `${this.baseUrl}/unbindMember`;

      reqBindMember._user = reqBindMember._user._id ? reqBindMember._user._id: reqBindMember._user;
      reqBindMember._institution = reqBindMember._institution._id ? reqBindMember._institution._id: reqBindMember._institution;
      reqBindMember._profile = reqBindMember._profile._id ? reqBindMember._profile._id: reqBindMember._profile;

      return this.http.post<IStatusMessage>(uri, reqBindMember, { headers: AuthService.headers() });
  }

  read(): Observable<IInstitution[]> {
    return this.http.get<IInstitution[]>(this.baseUrl, { headers: AuthService.headers() });
  }

  readById(id: String): Observable<IInstitution & IStatusMessage> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<IInstitution & IStatusMessage>(url, { headers: AuthService.headers() });
  }

  filterOne(institution: IInstitution, queryConfig: IQueryConfig): Observable<IInstitution & IStatusMessage> {
      const url = `${this.baseUrl}/filterOne`;
      const filter = { filter: institution, queryConfig }
      return this.http.post<IInstitution & IStatusMessage>(url, filter, { headers: AuthService.headers() });
  }

  filterAll(institution: IInstitution, queryConfig: IQueryConfig): Observable<IInstitution[] & IStatusMessage> {
      const url = `${this.baseUrl}/filterAll`;
      const filter = { filter: institution, queryConfig }
      return this.http.post<IInstitution[] & IStatusMessage>(url, filter, { headers: AuthService.headers() });
  }

  update(institution: IInstitution): Observable<IInstitution & IStatusMessage> {
    const url = `${this.baseUrl}/${institution._id}`
    return this.http.put<IInstitution & IStatusMessage>(url, institution, { headers: AuthService.headers() });
  }

  delete(id: String): Observable<IInstitution & IStatusMessage> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<IInstitution & IStatusMessage>(url, { headers: AuthService.headers() });
  }

}
