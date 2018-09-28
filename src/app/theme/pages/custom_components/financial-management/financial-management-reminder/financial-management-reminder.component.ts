import { Component, OnInit } from '@angular/core';
import { ScriptLoaderService } from './../../../../../_services/script-loader.service';

@Component({
  selector: 'app-financial-management-reminder',
  templateUrl: "./financial-management-reminder.component.html",
  styleUrls: ["./financial-management-reminder.component.css" , "../financial-management.component.css"]
})
export class FinancialManagementReminderComponent implements OnInit {

  constructor(private _script: ScriptLoaderService) { }

  ngOnInit() {
    this._script.loadScripts('app-financial-management-reminder',
    ['assets/app/js/financial-management.js']); 
  }

}
