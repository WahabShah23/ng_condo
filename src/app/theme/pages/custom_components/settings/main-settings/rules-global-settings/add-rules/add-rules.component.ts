import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ScriptLoaderService } from "../../../../../../../_services/script-loader.service";
import { RulesService } from "../../../../../../../services/rules.service";
import { SelectDropDownComponent } from "ngx-select-dropdown";

@Component({
    selector: 'app-add-rules',
    templateUrl: './add-rules.component.html',
    styleUrls: ['./add-rules.component.css']
})
export class AddRulesComponent implements OnInit, AfterViewInit {

    @ViewChild('tagsInput') tagsInput: ElementRef;

    addRuleForm = false;
    isRuleGridView = true;
    RuleViewName = 'List View';
    default_imgUrl = 'assets/app/media/img/custom/inventories/placeholder.png';

    rules;  // rule property for rule service implementation
    notAllowed;

    constructor(public rules_service: RulesService, public _script: ScriptLoaderService, private renderer: Renderer2) {
        this.rules = this.rules_service.getRules();
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
        this._script.loadScripts('app-rules-global',
            ['assets/demo/default/custom/components/forms/widgets/summernote.js',
                'assets/demo/default/custom/components/forms/widgets/select2_custom.js']);
    }

    addRule(rule_name: string, rule_img: string, rule_desc?: string) {
        this.rules.push({ name: rule_name, img: rule_img, desc: rule_desc });
        this.isRuleGridView = !this.isRuleGridView;
        // this.changeRuleView();
    }


}
