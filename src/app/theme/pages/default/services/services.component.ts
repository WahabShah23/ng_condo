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


    //Calendar
    months = ["January" , "February" , "March", "April" , "May" , "June" , "July" , "August" , "September" , "October" , "November" , "December"];
    days = [{date:'01' , day:'Sun'},
            {date:'02' , day:'Mon'},
            {date:'03' , day:'Tue'},
            {date:'04' , day:'Wed'},
            {date:'05' , day:'Thur'},
            {date:'06' , day:'Fri'},
            {date:'07' , day:'Sat'}];
    i=0;
    selected = this.months[this.i]; 
    
    moveToRight()
    {
        if(this.i==11)
        {
            this.i=0;
        }
        else
        {
            this.i++;
        }
        this.selected = this.months[this.i];
    }  


    moveToLeft()
    {
        if(this.i==0)
        {
            this.i=11;
        }
        else
        {
            this.i--;
        }
        this.selected = this.months[this.i];   
    }

}