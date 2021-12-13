import { IAddress, IEmail, IPhone } from './../interfaces/Contact';
import { Injectable } from '@angular/core';
import { NotificationService } from './notification.service';
import { fromEvent, Observable } from 'rxjs';
import { IStatusMessage } from '../interfaces/IStatusMessage';
import { EventEmitterService } from './event-emitter.service';
import { MaskApplierService, MaskPipe } from 'ngx-mask';
import { Title } from '@angular/platform-browser';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { GenderEnum } from '../interfaces/User';

@Injectable({
    providedIn: 'root'
})
export class UtilService {

    static notifying: NotificationService;
    static Title: Title;

    private maskPipe: MaskPipe

    constructor(
        private maskAService: MaskApplierService
    ) {
        this.maskPipe = new MaskPipe(maskAService)
    }

    static typeahead(elem: Element): Observable<any> {
        // const searchBox = ;

        return fromEvent(elem, 'input').pipe(
            map((e) => (e.target as HTMLInputElement).value),
            // map((e: KeyboardEvent) => (e.target as HTMLInputElement).value),
            // filter(text => text.length > 2),
            debounceTime(600),
            distinctUntilChanged()
            // switchMap(() => ajax('/api/endpoint'))
        );
    }

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

    public static getAvatarByGender(gender: string): string {
        return (gender == GenderEnum.MALE)
            ? "../../../../assets/avatar5.png"
            : (gender == GenderEnum.FEMALE)
                ? "../../../../assets/avatar2.png"
                : (gender == GenderEnum.UNINFORMED)
                    ? "../../../../assets/avatar.png"
                    : "../../../../assets/logo-1257x577-alpha3.png"
    }

    /**
     * @description Join a emails list in a string using a separator.
     * @param emailList List of emails
     * @param separator Separator used to separe the emails
     * @returns String with all emails joineds
     */
    emailListToString(emailList: IEmail[], separator: string): string {
        if (!emailList) return null;

        let aux = ''
        let result = ''
        emailList.forEach((e, i, l) => {

            aux = `${e.address}${(e.description) ? ' (' + e.description + ')' : ''}`
            result += (result.length > 0) ? separator + aux : aux;
        })
        return result;
    }

    /**
     * @description Join a phones list in a string using a separator.
     * @param phoneList List of phones. The object of the list have the type/struct: { number: number, description: string }
     * @param separator Separator used to separe the phones
     * @returns String with all phones joineds
     */
    phoneListToString(phoneList: IPhone[], separator: string): string {
        if (!phoneList) return null;

        let result = ''
        phoneList.forEach((e, i, l) => {
            let number = this.phoneMasked(e.number);
            // let number = e.number
            let aux = `${number}${(e.description) ? ' (' + e.description + ')' : ''}`
            result += (result.length > 0) ? separator + aux : aux;
        })
        return result;
    }

    phoneMasked(n: number): string {
        if (!n) return null;

        let xLength = (n.toString().match(/\d/g).length);
        let mask = (xLength === 13) ? '+00 (00) 0 0000-0000'
            : (xLength === 12) ? '+00 (00) 0000-0000'
                : (xLength === 11) ? '(00) 0 0000-0000'
                    : (xLength === 10) ? '(00) 0000-0000'
                        : '000000000000000';
        let number = this.maskPipe.transform(n, mask);
        return number;
    }

    anyMasked(target: string, mask: string): string {
        return this.maskPipe.transform(target, mask);
    }

    /**
     * @description Join all the address properties in a string.
     * @param address Object of the type IAddress
     * @returns Return a string with all the address properties joined
     */
    addressToString(address: IAddress) {
        if (!address) return null;

        const array = [
            this.maskPipe.transform(address.zipcode, "00.000-000"),
            address.country,
            address.state,
            address.city,
            address.district,
            address.place,
            address.number]
        let result = ''
        array.forEach((e, i, l) => {
            if (e)
                result += (result.length > 0) ? ', ' + e : e;
        })
        return result;
    }

    static getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    static getRandom9Digits() {
        let min = 100000000, max = 999999999;
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    static countdownTimer(duration, display) {
        let timer = duration, minutes, seconds;
        setInterval(function () {
            minutes = parseInt(''+timer / 60, 10);
            seconds = parseInt(''+timer % 60, 10);
    
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
    
            display.textContent = minutes + ":" + seconds;
    
            if (--timer < 0) {
                timer = duration;
            }
        }, 1000);
    }

    static default(resp: Observable<any & IStatusMessage>) {

        let anyData: any;

        const sub = resp.subscribe((data) => {
            if (data.statusCode >= 400) {
                UtilService.notifying.showError(data.statusMessage, `Erro ${data.statusCode}!`);
                return;
            }
            UtilService.notifying.showSuccess("Ação realizada com sucesso!", "Ok!");
            EventEmitterService.get('is-success').emit(true);
            anyData = data;
            sub.unsubscribe();
        }, (error) => {
            UtilService.notifying.showError("Não foi possível realizar esta ação!", "Erro!");
            sub.unsubscribe();
        });

        return anyData;
    }

    static isConfirm(question: string = "Confirmar ação?") {
        if (!confirm(question)) {
            UtilService.notifying.showWarning("Ação cancelada!", "Ops!");
            return false;
        }
        return true;
    }
}
