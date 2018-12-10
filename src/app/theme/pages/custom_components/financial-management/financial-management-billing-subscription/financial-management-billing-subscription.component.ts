import { ScriptLoaderService } from './../../../../../_services/script-loader.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-financial-management-billing-subscription',
    templateUrl: "./financial-management-billing-subscription.component.html",
    styleUrls: ["./financial-management-billing-subscription.component.css", "../financial-management.component.css"]
})
export class FinancialManagementBillingSubscriptionComponent implements OnInit {

    constructor(private _script: ScriptLoaderService) { }




    ngOnInit() {
        this._script.loadScripts('app-financial-management-billing-subscription',
            ['assets/app/js/financial-management.js']);
    }

}
