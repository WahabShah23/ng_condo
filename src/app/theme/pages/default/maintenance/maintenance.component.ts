import { Component, OnInit } from '@angular/core';
import { ScriptLoaderService } from '../../../../_services/script-loader.service';


@Component({
    selector: '.m-grid__item.m-grid__item--fluid.m-grid.m-grid--ver-desktop.m-grid--desktop.m-body',
    templateUrl: './maintenance.component.html',
    styleUrls: ['./maintenance.component.css']
})
export class MaintenanceComponent implements OnInit {


    constructor(private _script: ScriptLoaderService) {

    }
    ngOnInit() {

    }

}