import { AfterViewInit, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ScriptLoaderService } from "../../../../../_services/script-loader.service";
import { trigger, style, animate, transition, state } from '@angular/animations';
import {Folder} from "../../../../../models/Folder.model";

declare var $: any;

@Component({
    selector: 'app-workspace-storage',
    templateUrl: './workspace-storage.component.html',
    styleUrls: ['../storage.component.css'],
    animations: [
        trigger(
            'enterAnimation', [
                transition(
                    ':enter', [
                        style({ transform: 'translateX(100%)', opacity: 0 }),
                        animate('500ms', style({ transform: 'translateX(0)', opacity: 1 }))
                    ]
                ),
                transition(
                    ':leave', [
                        style({ transform: 'translateX(0)', 'opacity': 1 }),
                        animate('500ms', style({ transform: 'translateX(100%)', opacity: 0 }))

                    ]
                )]
        ),
        trigger('slideInOut', [
            state('in', style({
                transform: 'translate3d(0, 0, 0)'
            })),
            state('out', style({
                transform: 'translate3d(100%, 0, 0)'
            })),
            transition(
                'in => out',
                animate('400ms ease-in-out')),
            transition(
                'out => in',
                animate('400ms ease-in-out'))
        ])

    ],
    encapsulation: ViewEncapsulation.None
})
/*
class Folder
{
    id: string;
    folderName: string;
    childrenfolders: Folder[];
    parentFolder : Folder;
    constructor(id , name , parent:Folder)
    {
        this.id = undefined;
        this.parentFolder = undefined;
    }
   
}
*/

export class WorkspaceStorageComponent implements OnInit, AfterViewInit {

    id:number = 0;
    display: boolean = false;
    menuState: string = 'out';
    folders : Folder[] = [new Folder(++this.id, "First Folder" , undefined)];
    

    constructor(private _script: ScriptLoaderService) { }

    ngOnInit() {/*

        $(document).on('click', '#add-folder', function() {
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
        */

    }

    ngAfterViewInit() {
        this._script.loadScripts('app-workspace-storage',
            ['assets/app/js/dashboard.js']);

    }



    toggleMenu() {
        // 1-line if statement that toggles the value:
        this.menuState = this.menuState === 'out' ? 'in' : 'out';
    }

    hideRightMenu() {
        // 1-line if statement that toggles the value:
        this.menuState = this.menuState === 'out' ? 'in' : 'out';
    }

    addFolder(folderName : string)
    {
        this.folders.push(new Folder(1, folderName , undefined));
    }

}
