import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from "@angular/animations";

@Component({
  selector: 'app-assets-management-facilities',
  templateUrl: './assets-management-facilities.component.html',
  styleUrls: ['./assets-management-facilities.component.css'],
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
export class AssetsManagementFacilitiesComponent implements OnInit {

  isFacilityGridView = true;
  FacilityViewName = 'List View';

  constructor() { }

    searchBox: string = 'hide';

    toggleSearchBox() {
        // 1-line if statement that toggles the value:
        this.searchBox = this.searchBox === 'hide' ? 'show' : 'hide';
    }

  ngOnInit() {
  }

  changeFacilityView() {
      this.isFacilityGridView = !this.isFacilityGridView;
      if (this.isFacilityGridView) {
          this.FacilityViewName = 'List View';
      }
      else {
          this.FacilityViewName = 'Grid View';
      }
    }

}
