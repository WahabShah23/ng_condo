import { ScriptLoaderService } from './../../../../../_services/script-loader.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-financial-management-reports',
  templateUrl: "./financial-management-reports.component.html",
  styleUrls: ["../financial-management.component.css" , "./financial-management-reports.component.css"]
})
export class FinancialManagementReportsComponent implements OnInit {

  constructor(private _script: ScriptLoaderService) 
  {

  }

  ngOnInit() 
  {
      this._script.loadScripts('app-financial-management-reports',
    ['assets/app/js/financial-management.js']); 
  }

}
