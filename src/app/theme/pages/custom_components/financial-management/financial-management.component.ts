import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { ScriptLoaderService } from "../../../../_services/script-loader.service";

@Component({
  selector: '.m-grid__item.m-grid__item--fluid.m-grid.m-grid--ver-desktop.m-grid--desktop.m-body',
  templateUrl: './financial-management.component.html',
  styleUrls: ['./financial-management.component.css']
})
export class FinancialManagementComponent implements OnInit, AfterViewInit {

  constructor( public _script: ScriptLoaderService ) { }

    @ViewChild('tags_input') tagsInput: ElementRef;

  ngOnInit() {
  }
    ngAfterViewInit() {
        this._script.loadScripts('.m-grid__item.m-grid__item--fluid.m-grid.m-grid--ver-desktop.m-grid--desktop.m-body',
            ['assets/demo/default/custom/components/forms/widgets/select2.js',
                    'assets/app/js/custom_JS/select2_custom.js']);
    }

}
