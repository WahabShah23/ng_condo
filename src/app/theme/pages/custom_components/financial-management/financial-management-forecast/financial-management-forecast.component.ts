import { Component, OnInit } from '@angular/core';
import { ScriptLoaderService } from './../../../../../_services/script-loader.service';

@Component({
  selector: 'app-financial-management-forecast',
  templateUrl: "./financial-management-forecast.component.html",
  styleUrls: ["./financial-management-forecast.component.css" , "../financial-management.component.css"]
})
export class FinancialManagementForecastComponent implements OnInit {

  constructor(private _script: ScriptLoaderService) { }

  ngOnInit() 
  {
    this._script.loadScripts('app-financial-management-forecast',
    ['assets/app/js/financial-management.js']); 
  }

}
