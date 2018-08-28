import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ScriptLoaderService } from '../../../../_services/script-loader.service';


@Component({
    selector: "app-services",
    templateUrl: "./services.component.html",
    styleUrls: ["./services.component.css"]
})
export class ServicesComponent implements OnInit, AfterViewInit {

    isGridView = true;
    viewName = "List View";
    viewNameService="Create Service"
    isDisplayDetail = false;
    viewDate: Date = new Date();
    isDisplayForm = true;
    constructor(private _script: ScriptLoaderService) {

    }

    ngOnInit() {}
    ngAfterViewInit() {

        this._script.loadScripts('app-services',
            ['//www.amcharts.com/lib/3/plugins/tools/polarScatter/polarScatter.min.js',
                '//www.amcharts.com/lib/3/plugins/export/export.min.js',
                // 'assets/app/js/services.js'
            ]);
    }

    adjustRadiusMap() {
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