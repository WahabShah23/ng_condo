import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx'

import { Helpers } from "../../../../../helpers";
import { ScriptLoaderService } from "../../../../../_services/script-loader.service";
import { SupportService } from "../../../../../services/support.service";

@Component({
    selector: 'app-support',
    templateUrl: './support.component.html',
    styleUrls: ['./support.component.css']
})
export class SupportComponent implements OnInit {

    public issues;

    issue_count: number = 0;

    constructor( private _supportService: SupportService) { }

    ngOnInit() {
        this.getIssues();
    }

    getIssues() {
        this._supportService.getIssues().subscribe(
            (data: any[]) => { this.issues = data; console.log(data); this.issue_count = data.length; },
            err => console.error(err),
            () => console.log('Done Fetching Data (i.e.Issues)')

        );
    }
}
