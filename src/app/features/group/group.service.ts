import { IGroup, Group } from './../../interfaces/Group';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { ENV } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class GroupService {

  group: IGroup;
  groups: IGroup[];
  filtro: string;

  baseUrl = `${ENV.api.url}/group`;

  private headers = new HttpHeaders({
    //TODO
    // 'Authorization': localStorage.getItem('token'),
    // 'Content-Type': 'application/json'
  });

  constructor(private http: HttpClient) {
    this.group = new Group();
  }

  index() {
    this.read().subscribe((data) => {
      this.groups = data;
    })
  }

  edit(group: IGroup | null){
    this.group = (group) ? group : new Group();
  }

  create(group: IGroup): Observable<IGroup>{
    return this.http.post<IGroup>(this.baseUrl, group);
  }

  read(): Observable<IGroup[]> {
    return this.http.get<IGroup[]>(this.baseUrl, { headers: this.headers });
  }

  readById(id: string): Observable<IGroup> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<IGroup>(url);
  }

  update(group: IGroup): Observable<IGroup> {
    const url = `${this.baseUrl}/${group._id}`
    return this.http.put<IGroup>(url, group);
  }

  delete(id: string): Observable<IGroup> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<IGroup>(url);
  }

}
