import { AfterViewInit, Component, OnInit, ViewEncapsulation } from '@angular/core';

import { ScriptLoaderService } from "../../../../../_services/script-loader.service";
import { trigger, style, animate, transition, state } from '@angular/animations';
import { Folder } from "../../../../../models/Folder.model";


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

export class WorkspaceStorageComponent implements OnInit, AfterViewInit {

    isRoot: boolean = true;
    id:number = 0;
    editName: string = '';
    menuState: string = 'out';
    folders : Folder[] = [new Folder(this.id, "Folder")];
    subFolder: Folder[] = [new Folder(this.id, "Sub 1"),
                            new Folder(this.id, "Sub 2")];


    constructor(private _script: ScriptLoaderService) { }

    ngOnInit() {

        $(document).on('click', '#edit-folder', function(){
            let changedValue = $(this).closest('.modal-footer').prev().find('#edit-name').val();
            alert(changedValue);
            $(this).closest('#m_modal_edit').prev().prev().find('.main-folder').children('.folder-title').text(changedValue);
        });
        /*

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

    // Toggle right Menu on move button click
    toggleMenu() {
        // 1-line if statement that toggles the value:
        this.menuState = this.menuState === 'out' ? 'in' : 'out';
    }
    // Toggle right Menu on close or move button click
    hideRightMenu() {
        // 1-line if statement that toggles the value:
        this.menuState = this.menuState === 'out' ? 'in' : 'out';
    }

    //   Adds a new file element(folder) to the array
    addFolder(folderName : string)
    {
        this.id++;
        if(this.isRoot == true){
            this.folders.push(new Folder(0, folderName));
        }
        else {
            this.subFolder.push(new Folder(1,folderName))
        }
    }

    //Deletes the file element
    deleteItem(id:number) {
        this.folders.splice(id, 1);
    }

    // editFolderName(id:number, editName:string){
    //     alert(editName + " " + this.folders[id]);
    //     console.log(this.folders[id].folderName + " " + editName);
    // }

    // This gets the selected folder's name to the edit modal input field
    selectedFolderName(name:string) {
        this.editName = name;
    }

    //This moves files up to the parent folder
    moveFiles(id:number){
        this.folders.push(this.subFolder[id]);
        this.subFolder.splice(id, 1);

    }



}
