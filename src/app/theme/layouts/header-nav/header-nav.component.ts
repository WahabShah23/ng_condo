import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../helpers';

declare let mLayout: any;
@Component({
    selector: "app-header-nav",
    templateUrl: "./header-nav.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class HeaderNavComponent implements OnInit, AfterViewInit {

    display_storage = false;
    display_global = false;

    constructor() {

    }
    ngOnInit() {

    }
    ngAfterViewInit() {

        mLayout.initHeader();

    }

    closeStorage() {
        this.display_storage = false;
    }
    closeGlobal() {
        this.display_global = false;
    }

}