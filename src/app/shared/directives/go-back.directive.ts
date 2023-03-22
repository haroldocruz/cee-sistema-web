import { Location } from '@angular/common';
import { Directive, HostListener } from '@angular/core';

@Directive({
    selector: '[d-goBack]'
})
export class GoBackDirective {

    constructor(private location: Location) { }

    @HostListener('click')
    onClick() {
        this.location.back();
    }
}
