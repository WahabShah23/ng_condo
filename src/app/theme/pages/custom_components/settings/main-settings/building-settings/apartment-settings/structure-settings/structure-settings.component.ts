import { ScriptLoaderService } from './../../../../../../../../_services/script-loader.service';
import { Component, OnInit } from '@angular/core';
import { Helpers } from '../../../../../../../../helpers';

@Component({
  selector: 'app-structure-settings',
  templateUrl: "./structure-settings.component.html",
  styleUrls: ["./normalize.css" , "./style.css"]
})
export class StructureSettingsComponent implements OnInit {

  constructor(private _script: ScriptLoaderService) { }

  ngOnInit() {
    this._script.loadScripts('app-structure-settings', ['assets/app/js/custom_JS/3DMallMap/classie.js', 'assets/app/js/custom_JS/3DMallMap/list.min.js' , 'assets/app/js/custom_JS/3DMallMap/main.js' , 'assets/app/js/custom_JS/3DMallMap/modernizr-custom.js'], true)
    .then(result => {
        Helpers.setLoading(false);
        // optional js to be loaded once
        // this._script.loadScripts('app-structure-settings', ['assets/vendors/custom/fullcalendar/fullcalendar.bundle.js'], true);
    });
  }

}
