import { ActivatedRouteSnapshot, ActivatedRoute, Params } from '@angular/router';
import { ScriptLoaderService } from './../../../../../_services/script-loader.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-financial-management-tags',
    templateUrl: "./financial-management-tags.component.html",
    styleUrls: ["../financial-management.component.css", "./financial-management-tags.component.css"]
})
export class FinancialManagementTagsComponent implements OnInit {


    hideRow = false;
    dates = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

    tags = "Tags";
    constructor(private _script: ScriptLoaderService, private activeRouter: ActivatedRoute) {

    }

    ngOnInit() {
        this._script.loadScripts('app-financial-management-tags',
            ['assets/app/js/financial-management.js']);

        this.activeRouter.params.subscribe(
            (params: Params) => {
                this.tags = decodeURIComponent(params["name"]);
            }
        )

    }

}
