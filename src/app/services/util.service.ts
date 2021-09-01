import { IEmail, IPhone } from './../interfaces/Contact';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'any'
})
export class UtilService {

    constructor() { }

    /**
     * @description Get full name of the user and return a string with just first and last name together.
     * @param fullname String with full name of the user
     * @returns return a string with just first and last name together
     */
    getFirstLastName(fullname: string): string {
        const vector = fullname.split(' ');
        if (vector.length === 1)
            return vector[0];

        const first = vector[0];
        const last = vector[vector.length - 1];
        return first + " " + last;
    }

    /**
     * @description Join a emails list in a string using a separator.
     * @param emailList List of emails
     * @param separator Separator used to separe the emails
     * @returns String with all emails joineds
     */
    emailListToString(emailList: IEmail[], separator: string): string {
        let aux = ''
        let result = ''
        emailList.forEach((e, i, l) => {

            aux = `${e.address}${(e.description) ? '(' + e.description + ')' : ''}`
            result += (result.length > 0) ? separator + aux : aux;
        })
        return result;
    }

    /**
     * @description Join a phones list in a string using a separator.
     * @param emailList List of phones
     * @param separator Separator used to separe the phones
     * @returns String with all phones joineds
     */
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
