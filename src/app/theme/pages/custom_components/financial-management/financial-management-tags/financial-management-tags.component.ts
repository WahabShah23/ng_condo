import { ActivatedRouteSnapshot, ActivatedRoute, Params } from '@angular/router';
import { ScriptLoaderService } from './../../../../../_services/script-loader.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-financial-management-tags',
  templateUrl: "./financial-management-tags.component.html",
  styleUrls: ["../financial-management.component.css" , "./financial-management-tags.component.css"]
})
export class FinancialManagementTagsComponent implements OnInit {

  tags = "Tags";
  constructor(private _script: ScriptLoaderService ,private activeRouter: ActivatedRoute) 
  {

  }

  ngOnInit() 
  {
    this._script.loadScripts('app-financial-management-tags',
    ['assets/app/js/financial-management.js']); 

    this.activeRouter.params.subscribe(
      (params: Params)=>
      {
         this.tags = decodeURIComponent(params["name"]);          
      }
    )

  }

}
