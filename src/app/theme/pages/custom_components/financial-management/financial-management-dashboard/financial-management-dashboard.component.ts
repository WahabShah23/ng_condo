import {Component, ElementRef, OnInit, Renderer2, ViewChild, ViewEncapsulation} from '@angular/core';
import { ScriptLoaderService } from "../../../../../_services/script-loader.service";

@Component({
  selector: 'app-financial-management-dashboard',
  templateUrl: './financial-management-dashboard.component.html' ,
  styleUrls: ['./financial-management-dashboard.component.css' , "../financial-management.component.css"]
})
export class FinancialManagementDashboardComponent implements OnInit {

  // Variables and References
  hideRow:boolean = false;

  @ViewChild('tags_input') tagsInput: ElementRef;
  @ViewChild('description') description: HTMLInputElement;
  dates = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];

  constructor( public _script: ScriptLoaderService, private el: ElementRef, private renderer : Renderer2 ) { }


  ngOnInit() {
  }

  ngAfterViewInit() {
    this._script.loadScripts('.m-grid__item.m-grid__item--fluid.m-grid.m-grid--ver-desktop.m-grid--desktop.m-body',
        ['assets/demo/default/custom/components/forms/widgets/select2.js',
              'assets/app/js/custom_JS/select2_custom.js']);
  }

  edit_transaction() {
    this.renderer.valueOf();
    console.log(this.description.value);
  }

  add_transfer_rule() {

  }

  copy_transaction() {

  }

  add_reminder() {

  }

  split_transaction() {

  }

}
