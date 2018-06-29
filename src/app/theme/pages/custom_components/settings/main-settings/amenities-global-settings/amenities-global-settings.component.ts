import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-amenities-global-settings',
  templateUrl: './amenities-global-settings.html',
  styleUrls: ['./amenities-global-settings.css']
})
export class AmenitiesGlobalSettingsComponent implements OnInit {

    addAmenityForm = false;

    isAmenityGridView = true;
    AmenityViewName = 'List View';

  constructor() { }

  ngOnInit() {
  }

    changeAmenityView() {
        this.isAmenityGridView = !this.isAmenityGridView;
        if (this.isAmenityGridView) {
            this.AmenityViewName = 'List View';
        }
        else {
            this.AmenityViewName = 'Grid View';
        }
        this.addAmenityForm = false;
    }

}
