import { Component, OnInit, AfterViewInit } from '@angular/core';

import { ScriptLoaderService } from '../../../../../../_services/script-loader.service';

@Component({
  selector: 'app-building-settings',
  templateUrl: './building-settings.component.html',
  styleUrls: ['./building-settings.component.css']
})
export class BuildingSettingsComponent implements OnInit, AfterViewInit {

    addBuildingForm = false;
    isBuildingGridView = true;
    BuildingViewName = 'List View';
    buildingWizard = false;

  constructor( private _script: ScriptLoaderService ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
        this._script.loadScripts('app-wizard-building',
        ['assets/demo/default/custom/components/forms/wizard/wizard.js']);
  }


  changeBuildingView() {
        this.isBuildingGridView = !this.isBuildingGridView;
        if (this.isBuildingGridView) {
            this.BuildingViewName = 'List View';
        }
        else {
            this.BuildingViewName = 'Grid View';
        }
        this.addBuildingForm = false;
        this.buildingWizard = false;
  }

    editBuildingInfo() {
        this.buildingWizard = true;
    }

}