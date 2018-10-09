import { ScriptLoaderService } from './../../../../../_services/script-loader.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-financial-management-accounts',
  templateUrl: "./financial-management-accounts.component.html",
  styleUrls: ["../financial-management.component.css" , "./financial-management-accounts.component.css"]
})
export class FinancialManagementAccountsComponent implements OnInit {


  hideRow = false;
  dates = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
  
  constructor(private _script: ScriptLoaderService ,private activeRouter: ActivatedRoute) { }
  accounts = "Accounts";
  ngOnInit() 
  {
    
    this._script.loadScripts('app-financial-management-accounts',
    ['assets/app/js/financial-management.js']); 

    this.activeRouter.params.subscribe(
      (params: Params)=>
      {
         this.accounts = decodeURIComponent(params["name"]);          
      }
    )
    
  }

}
