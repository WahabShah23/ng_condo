import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ScriptLoaderService } from '../../../../../../_services/script-loader.service';
import { RulesService } from "../../../../../../services/rules.service";

@Component({
  selector: 'app-rules-global',
  templateUrl: './rules-global-settings.component.html',
  styleUrls: ['./rules-global-settings.component.css']
})
export class RulesGlobalSettingsComponent implements OnInit, AfterViewInit {

    addRuleForm = false;
    isRuleGridView = true;
    RuleViewName = 'List View';
    default_imgUrl = 'assets/app/media/img/custom/rules/placeholder.png';

    rules;  // rule property for rule service implementation

  constructor( public rules_service: RulesService, public _script: ScriptLoaderService ) {
      this.rules = this.rules_service.getRules();
  }

  ngOnInit() {
  }

    ngAfterViewInit()  {
        this._script.loadScripts('app-rules-global',
            ['assets/demo/default/custom/components/forms/widgets/summernote.js',
                    'assets/demo/default/custom/components/forms/widgets/bootstrap-markdown.js']);
                (<any>$('[data-provide="markdown"]')).markdown();
    }

  changeRuleView() {
      this.isRuleGridView = !this.isRuleGridView;
      if (this.isRuleGridView) {
          this.RuleViewName = 'List View';
      }
      else {
          this.RuleViewName = 'Grid View';
      }
      this.addRuleForm = false;
  }

    addRule(rule_name: string, rule_img: string, rule_desc?: string) {
        this.rules.push({name: rule_name, img: rule_img, desc: rule_desc });
        this.isRuleGridView = !this.isRuleGridView;
        this.changeRuleView();
    }

  deleteRule(id){
      console.log(id);
      this.rules.splice(id,1);
  }

}
