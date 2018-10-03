import { ScriptLoaderService } from './../../../../../_services/script-loader.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-financial-management-accounts',
  templateUrl: "./financial-management-accounts.component.html",
  styleUrls: ["../financial-management.component.css" , "./financial-management-accounts.component.css"]
})
export class FinancialManagementAccountsComponent implements OnInit {

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
