import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../helpers';
import { ScriptLoaderService } from '../../../../_services/script-loader.service';
@Component({
    selector: 'app-suppliers',
    templateUrl: './suppliers.component.html',
    styleUrls: ['./suppliers.component.css'],


})
export class SuppliersComponent implements OnInit, AfterViewInit {
    isGridView = true;
    viewName = "List View";
    customerType = "All";
    isDisplayDetail = false;
    isWizard = false;
    constructor(private _script: ScriptLoaderService) { }

    ngOnInit() {

    }
    ngAfterViewInit() {
        this._script.loadScripts('app-suppliers',
            ['//www.amcharts.com/lib/3/plugins/tools/polarScatter/polarScatter.min.js',
                '//www.amcharts.com/lib/3/plugins/export/export.min.js',
                'assets/app/js/customer.js']);

        Helpers.loadStyles('app-suppliers', [
            '//www.amcharts.com/lib/3/plugins/export/export.css']);
    }

    changeView() {
        this.isGridView = !this.isGridView;
        if (this.isGridView) {
            this.viewName = "List View";
        }
        else {
            this.viewName = "Grid View";
        }
    }

}
