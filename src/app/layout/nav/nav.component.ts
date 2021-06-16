import OverlayScrollbars from 'overlayScrollbars';
import { Component, OnInit, ElementRef } from '@angular/core';
// import OverlayScrollbars from "overlayScrollbars/js/jquery.overlayScrollbars"

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.less']
})
export class NavComponent implements OnInit {

    constructor(private elRef: ElementRef) {}

    ngOnInit(): void {
      OverlayScrollbars(this.elRef.nativeElement.querySelector("div.sidebar"), {
            className: "os-theme-light",
            // resize: "both",
            // sizeAutoCapable: true,
            // paddingAbsolute: true,
            scrollbars: {
                autoHide: "move",
                clickScrolling: true
            }
        });
    }

}
