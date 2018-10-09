import { Component, OnInit } from '@angular/core';
import { ScriptLoaderService } from './../../../../../_services/script-loader.service';

@Component({
  selector: 'app-financial-management-reminder',
  templateUrl: "./financial-management-reminder.component.html",
  styleUrls: ["./financial-management-reminder.component.css" , "../financial-management.component.css"]
})
export class FinancialManagementReminderComponent implements OnInit {


  hideRow = false;
  dates = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];

  
  constructor(private _script: ScriptLoaderService) { }

  ngOnInit() {
    this._script.loadScripts('app-financial-management-reminder',
    ['assets/app/js/financial-management.js']); 
  }

}
