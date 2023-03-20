import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ENV } from 'src/environments/environment';

export interface IEmailData {
  from: string;
  to: string;
  subject: string;
  text?: string;
}

export interface IMessageResponse {
  isOk: boolean;
  message: string;
}

@Injectable({
  providedIn: 'any'
})
export class SendMailService {

  baseUrl = `${ENV.api.url}/send-mail`;

  constructor(public http: HttpClient) { }

  sendMail(emailData: IEmailData): Observable<IMessageResponse> {
    return this.http.post<IMessageResponse>(this.baseUrl, emailData);
  }
}
