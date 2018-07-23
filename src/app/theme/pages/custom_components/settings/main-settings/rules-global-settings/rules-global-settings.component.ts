import {AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import { ScriptLoaderService } from '../../../../../../_services/script-loader.service';
import { RulesService } from "../../../../../../services/rules.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-rules-global',
  templateUrl: './rules-global-settings.component.html',
  styleUrls: ['./rules-global-settings.component.css']
})
export class RulesGlobalSettingsComponent implements OnInit, AfterViewInit {

    @ViewChild('allowed') allowed : ElementRef;
    addRuleForm = false;
    isRuleGridView = true;
    RuleViewName = 'List View';
    default_imgUrl = 'assets/app/media/img/custom/rules/placeholder.png';

    rules;  // rule property for rule service implementation

  constructor( public rules_service: RulesService, private router: Router, private activatedRoute: ActivatedRoute, public _script: ScriptLoaderService, private renderer: Renderer2 ) {
      this.rules = this.rules_service.getRules();
  }

  ngOnInit() {
  }

    ngAfterViewInit()  {
        this._script.loadScripts('app-rules-global',
            ['assets/demo/default/custom/components/forms/widgets/summernote.js',
                    'assets/demo/default/custom/components/forms/widgets/select2.js']);
    }

  changeRuleView() {
      this.isRuleGridView = !this.isRuleGridView;
      if (this.isRuleGridView) {
          this.RuleViewName = 'List View';
          this.router.navigate(["grid"],{relativeTo: this.activatedRoute });
      }
      else {
          this.RuleViewName = 'Grid View';
          this.router.navigate(["list"], {relativeTo: this.activatedRoute });

      }
      this.addRuleForm = false;
  }


}
