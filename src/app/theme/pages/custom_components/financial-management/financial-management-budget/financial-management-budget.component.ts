import { AfterViewInit } from '@angular/core';
import { ScriptLoaderService } from './../../../../../_services/script-loader.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-financial-management-budget',
  templateUrl: "./financial-management-budget.component.html",
  styleUrls: ["./financial-management-budget.component.css" , "../financial-management.component.css"]
})
export class FinancialManagementBudgetComponent implements OnInit, AfterViewInit {

  constructor(private _script: ScriptLoaderService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
     this._script.loadScripts('app-financial-management-budget',
         ['assets/app/js/financial-management.js']); 

}

}
