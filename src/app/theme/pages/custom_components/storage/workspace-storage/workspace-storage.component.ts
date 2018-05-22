import {AfterViewInit, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ScriptLoaderService} from "../../../../../_services/script-loader.service";

declare var $:any;

@Component({
  selector: 'app-workspace-storage',
  templateUrl: './workspace-storage.component.html',
  styleUrls: ['../storage.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class WorkspaceStorageComponent implements OnInit, AfterViewInit {

    folderName = "New Folder";
    folderDesc = "";
  constructor(private _script: ScriptLoaderService) { }

  ngOnInit() {


  }

    ngAfterViewInit() {
        this._script.loadScripts('app-workspace-storage',
            ['assets/app/js/dashboard.js']);

    }

    addFolder()
    {
               $('.folders-wrapper').append(`
                <div class="folder-container">
              <div class="ffolder medium yellow main-folder">
                <small class="folder-title">` + this.folderName + `</small>
                <br/>
                <span>10 Files</span>
            </div>
            <div class="ffolder medium cyan hidden-folder">
                <small class="folder-title"> Details </small>
                <div class="folder-details">
                    <a class="text-left"> Open </a>
                    <a class="text-left"> Edit </a>
                    <a class="text-left"> Delete </a>
                </div>
            </div>
            </div>
        `);

        /*
        $(document).on('click', '#add-service-request', function () {


        });
        */
    }

}
