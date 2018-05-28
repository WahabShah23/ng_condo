import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ScriptLoaderService } from "../../../../_services/script-loader.service";

@Component({
    selector: 'app-global',
    templateUrl: './global.component.html',
    styleUrls: ['./global.component.css', 'css/demo.css', 'css/stapel.css', 'css/custom.css']
})
export class GlobalComponent implements OnInit, AfterViewInit {

    constructor(private _script: ScriptLoaderService) { }

    ngOnInit() {
    }

    ngAfterViewInit() {
        this._script.loadScripts('app-global',
            ['assets/app/js/custom_JS/Stapel/modernizr.custom.63321.js', 'assets/app/js/custom_JS/Stapel/jquery.stapel.js',
                'assets/app/js/custom_JS/global.js']);

    }

}
