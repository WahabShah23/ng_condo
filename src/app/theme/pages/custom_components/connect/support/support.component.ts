import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Rx'
import { NgForm } from "@angular/forms";

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
    loader: boolean = true;
    support;

    // @ViewChild('f') form : any;
    issue_count: number = 0;

    constructor(private _supportService: SupportService) { }

    ngOnInit() {
        this.getIssues();
    }

    getIssues() {
        this._supportService.getIssues().subscribe(
            (data: any) => { this.issues = data; console.log(data); this.issue_count = data.length; },
            err => console.error(err),
            () => { this.loader = false;  console.log('Done Fetching Data (i.e.Issues)')}

        );
    }


    onSubmit(form_data: NgForm) {
        console.log(form_data);
        this._supportService.createTicket(form_data.value.f_email, form_data.value.f_name, form_data.value.f_subject, form_data.value.f_message, form_data.value.f_priority)
            .subscribe(
            data => {
                this.getIssues();
                console.log(form_data);
                form_data.resetForm();
                return true;
            },
            error => {
                console.error("Error saving Issue!");
                return Observable.throw(error);
            }
            );

    }


    /* onSubmit() {
         console.log();
         this._supportService.createTicket(this.form_data.value.f_email, this.form_data.value.f_name, this.form_data.value.f_subject, this.form_data.value.f_message, this.form_data.value.f_priority)
             .subscribe(
                 data => {
                     // refresh the list
                     this.getIssues();
                     this.form_data.reset();
                     console.log(data);
                     return true;
 
                 },
                 error => {
                     console.error("Error saving Issue!");
                     return Observable.throw(error);
                 }
             );
 
     } */
}
