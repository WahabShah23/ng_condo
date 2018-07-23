import { Component, OnInit, Renderer2 } from '@angular/core';
import { ScriptLoaderService } from "../../../../../../../_services/script-loader.service";
import { RulesService } from "../../../../../../../services/rules.service";

@Component({
  selector: 'app-grid-view-rules',
  templateUrl: './grid-view-rules.component.html',
  styleUrls: ['./grid-view-rules.component.css']
})
export class GridViewRulesComponent implements OnInit {

    rules;  // rule property for rule service implementation

    constructor( public rules_service: RulesService, public _script: ScriptLoaderService, private renderer: Renderer2 ) {
        this.rules = this.rules_service.getRules();
    }

  ngOnInit() {
  }

    deleteRule(id){
        console.log(id);
        this.rules.splice(id,1);
        console.log(this.rules);
        console.log(this.rules_service.getRules());
    }

}
