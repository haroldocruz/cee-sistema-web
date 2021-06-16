import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-maintained',
    templateUrl: './maintained.component.html',
    styleUrls: ['./maintained.component.less']
})
export class MaintainedComponent implements OnInit {

    item: any

    constructor() { }

    ngOnInit(): void {
        this.mockDataIndex() //!REMOVER
    }

    mockDataIndex() { //!REMOVER
        this.item = {
            addressList: [

            ],
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem qui, necessitatibus modi sapiente, cupiditate optio vero cum eius eos voluptatem quia quasi, sint recusandae ea nobis tempora ad magni architecto.",
            legalBaseList: [
                { name: "Lei n° 111", link: "#", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem qui, necessitatibus modi sapiente, cupiditate optio vero cum eius eos voluptatem quia quasi, sint recusandae ea nobis tempora ad magni architecto." },
                { name: "Lei n° 222", link: "#", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem qui, necessitatibus modi sapiente, cupiditate optio vero cum eius eos voluptatem quia quasi, sint recusandae ea nobis tempora ad magni architecto." }]
        }
    }

}
