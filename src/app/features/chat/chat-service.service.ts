import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ChatLocalService {

  user = AuthService.user;

  constructor() { }
}
