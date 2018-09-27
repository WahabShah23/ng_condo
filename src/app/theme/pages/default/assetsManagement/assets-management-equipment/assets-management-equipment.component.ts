import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-assets-management-equipment',
  templateUrl: './assets-management-equipment.component.html',
  styleUrls: ['./assets-management-equipment.component.css'],
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
export class AssetsManagementEquipmentComponent implements OnInit {

  isEquipmentGridView = true;
  EquipmentViewName = 'List View';

  constructor() { }

    searchBox: string = 'hide';
    searchText;

    toggleSearchBox() {
        // 1-line if statement that toggles the value:
        this.searchBox = this.searchBox === 'hide' ? 'show' : 'hide';
    }

  ngOnInit() {
  }

    changeEquipmentView() {
        this.isEquipmentGridView = !this.isEquipmentGridView;
        if (this.isEquipmentGridView) {
            this.EquipmentViewName = 'List View';
        }
        else {
            this.EquipmentViewName = 'Grid View';
        }
    }

}
