import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../helpers';
import { Router } from '@angular/router';

declare let mLayout: any;
@Component({
    selector: "app-header-nav",
    templateUrl: "./header-nav.component.html",
    encapsulation: ViewEncapsulation.None
})
export class HeaderNavComponent implements OnInit, AfterViewInit {

    display_storage = false;
    display_global = false;
    router: string;

    constructor( _router: Router) {
        this.router = _router.url;
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