import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from "@angular/animations";

@Component({
    selector: 'app-assets-management-tools',
    templateUrl: './assets-management-tools.component.html',
    styleUrls: ['./assets-management-tools.component.css'],
    animations: [
        trigger('slideRightLeft', [
            state('show', style({
                transform: 'translateX(0)',
                // opacity: 1,
                // display: 'inline-block'
                width: '200px'
            })),
            state('hide', style({
                transform: 'translateX(0)',
                // opacity: 0,
                // display: 'none'
                width: '0px'
            })),
            transition('show => hide', animate('400ms ease-out')),
            transition('hide => show', animate('400ms ease-in'))
        ]),
    ]
})
export class AssetsManagementToolsComponent implements OnInit {

    isToolsGridView = true;
    ToolsViewName = 'List View';
    searchText;

    constructor() { }

    searchBox: string = 'hide';

    toggleSearchBox() {
        // 1-line if statement that toggles the value:
        this.searchBox = this.searchBox === 'hide' ? 'show' : 'hide';
    }

    ngOnInit() {
    }

    changeToolsView() {
        this.isToolsGridView = !this.isToolsGridView;
        if (this.isToolsGridView) {
            this.ToolsViewName = 'List View';
        }
        else {
            this.ToolsViewName = 'Grid View';
        }
    }

}
