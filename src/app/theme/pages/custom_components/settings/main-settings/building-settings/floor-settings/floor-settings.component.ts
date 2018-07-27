import { Component, OnInit, ViewChild } from '@angular/core';
import { SelectDropDownComponent } from 'ngx-select-dropdown/dist/components';

@Component({
    selector: 'app-floor-settings',
    templateUrl: './floor-settings.component.html',
    styleUrls: ['./floor-settings.component.css']
})
export class FloorSettingsComponent implements OnInit {

    @ViewChild('amenitiesDropdown')  amenitiesDropdown: SelectDropDownComponent;
    addFloorForm = false;
    isFloorGridView = true;
    FloorViewName = 'List View';
    buildingName = "ABC Building";
    floorType="Normal";
    ownerParking;
    guestParking;

    amenities = ["Swimming Pool", "Gym" , "Laundry"];
    amneityDropdownModel;
    config = {
        displayKey: "description", //if objects array passed which key to be displayed defaults to description,
        search: true //enables the search plugin to search in the list
    }

    constructor() { }

    ngOnInit() {
    }

    changeFloorView() {
        this.isFloorGridView = !this.isFloorGridView;
        if (this.isFloorGridView) {
            this.FloorViewName = 'List View';
        }
        else {
            this.FloorViewName = 'Grid View';
        }
        this.addFloorForm = false;
    }

    onFloorChanged(floor:string)
    {
        this.floorType = floor;
    }
    checkchanged(checkbox: HTMLInputElement)
    {
        if(checkbox.value=="owner")
        {
          (checkbox.checked) ?  this.ownerParking=true:  this.ownerParking=false; 
        }
        else
        {
            (checkbox.checked) ?  this.guestParking=true:  this.guestParking=false; 
        }
    }

    addAmenity(name: string) {
        this.amenities.push(name);
        this.amenitiesDropdown.availableItems.push(name);

    }


}
