import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';

declare let mLayout: any;
@Component({
    selector: "app-aside-nav-assets",
    templateUrl: "./aside-nav-assets.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class AsideNavAssetsComponent implements OnInit, AfterViewInit {


    constructor() {

    }
    ngOnInit() {

    }
    ngAfterViewInit() {

        mLayout.initAside();

    }

}