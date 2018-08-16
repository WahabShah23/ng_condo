import { Component, OnInit, AfterViewInit } from "@angular/core";
import { Helpers } from "../../../../helpers";
import { ScriptLoaderService } from "../../../../_services/script-loader.service";
@Component({
  selector: 'app-people-management',
  templateUrl: "./peopleManagement.component.html",
  styleUrls: [
    "./peopleManagement.component.css",
    "../../../../../../node_modules/dragula/dist/dragula.css"
  ]
})
export class PeopleManagementComponent implements OnInit, AfterViewInit {
  isGridView = true;
  viewName = "List View";
  constructor(private _script: ScriptLoaderService) {}
  ngOnInit() {}
  ngAfterViewInit() {
    this._script.loadScripts("app-people-management", [
      "//www.amcharts.com/lib/3/plugins/tools/polarScatter/polarScatter.min.js",
      "//www.amcharts.com/lib/3/plugins/export/export.min.js",
      "assets/app/js/people.js"
    ]);

    Helpers.loadStyles("app-people-management", [
      "//www.amcharts.com/lib/3/plugins/export/export.css"
    ]);
  }

  changeView() {
    this.isGridView = !this.isGridView;
    if (this.isGridView) {
      this.viewName = "List View";
    } else {
      this.viewName = "Grid View";
    }
  }
}
