import { IProfile } from './../interfaces/Profile';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthUtils {

  cee: string[]
  institution: string[]
  commission: string[]

  constructor() {
    this.cee = ["Administrator", "Gerente"]
    this.institution = ["Auxiliar", "Procurador"]
    this.commission = ["Membro"]
  }

  permissions(profile: IProfile): boolean{
    profile
    return false;
  }
}
