import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'sd-page-title',
    templateUrl: './page-title.component.html',
    styleUrls: ['./page-title.component.less']
})
export class PageTitleComponent implements OnInit {

    @Input() input: IPageTitleComponentInput;

    constructor() { }

    ngOnInit(): void {
        this.input = {
            title: (this.input) ? this.input.title : ''
        }
    }
}

interface IPageTitleComponentInput {
    title: string
}