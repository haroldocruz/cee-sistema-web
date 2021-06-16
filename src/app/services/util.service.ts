import { IEmail, IPhone } from './../interfaces/Contact';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UtilService {

    constructor() { }

    emailListToString(emailList: IEmail[], separator: string): string {
        let aux = ''
        let result = ''
        emailList.forEach((e, i, l) => {

            aux = `${e.address}${(e.description) ? '(' + e.description + ')' : ''}`
            result += (result.length > 0) ? separator + aux : aux;
        })
        return result;
    }

    getFirstLastName(fullname: string): string {
        const vector = fullname.split(' ');
        if (vector.length === 1)
            return vector[0];

        const first = vector[0];
        const last = vector[vector.length - 1];
        return first + " " + last;
    }

    phoneListToString(phoneList: IPhone[], separator: string): string {
        let aux = ''
        let result = ''
        phoneList.forEach((e, i, l) => {

            aux = `${e.number}${(e.description) ? '(' + e.description + ')' : ''}`
            result += (result.length > 0) ? separator + aux : aux;
        })
        return result;
    }
}
