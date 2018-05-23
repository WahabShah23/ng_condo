import {AfterViewInit, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ScriptLoaderService} from "../../../../../_services/script-loader.service";
import { trigger, style, animate, transition } from '@angular/animations';

declare var $:any;

@Component({
  selector: 'app-workspace-storage',
  templateUrl: './workspace-storage.component.html',
  styleUrls: ['../storage.component.css'],
    animations: [
        trigger(
            'enterAnimation',
            [
                transition(
                    ':enter', [
                        style({transform: 'translateX(100%)', opacity: 0}),
                        animate('500ms', style({transform: 'translateX(0)',opacity: 1}))
                    ]
                ),
                transition(
                    ':leave', [
                        style({transform: 'translateX(0)', 'opacity': 1}),
                        animate('500ms', style({transform: 'translateX(100%)',opacity: 0}))

                    ]
                )]
        )
    ],
    encapsulation: ViewEncapsulation.None
})
export class WorkspaceStorageComponent implements OnInit, AfterViewInit {

    display:boolean = false;

  constructor(private _script: ScriptLoaderService) { }

  ngOnInit() {

      $(document).on('click', '#add-folder', function (){
          var folderName = $('#recipient-name').val();
          folderName = (folderName == '') ? 'New Folder' : folderName;
          $(this).closest('#m_modal_5').prev().find('.folders-wrapper').append(`
                <div class="folder-container">
                    <div class="ffolder medium yellow main-folder">
                        <small class="folder-title">` + folderName + `</small>
                        <br/>
                        <span>0 Files</span>
                    </div>
                    <div class="ffolder medium cyan hidden-folder">
                        <small class="folder-title"> Details </small>
                        <div class="folder-details">
                            <a class="text-left"> Open </a>
                            <a class="text-left"> Edit </a>
                            <a class="text-left"> Delete </a>
                            <a class="text-left"> Option 1 </a>
                            <a class="text-left"> Option 2 </a>
                        </div>
                    </div>
                </div>
          `);
          $('#recipient-name').val('');
      });

  }

    ngAfterViewInit() {
        this._script.loadScripts('app-workspace-storage',
            ['assets/app/js/dashboard.js']);

    }

}
