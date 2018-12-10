import { Component, OnInit, ViewChild } from '@angular/core';
import { SelectDropDownComponent } from "ngx-select-dropdown";

@Component({
    selector: 'app-assets-facilities',
    templateUrl: "./assets-facilities.component.html",
    styleUrls: ["./assets-facilities.component.css"]
})
export class AssetsFacilitiesComponent implements OnInit {

    facilitiesList = [{ name: "ABC Building", code: "Facility A(1)", image: "assets/app/media/img/logos/logo-3.png", category: "Building", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { name: "Xyz Building", code: "Facility B(2)", image: "assets/app/media/img/logos/logo-1.png", category: "Building", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." }];

    constructor() { }

    ngOnInit() {
    }


    addFacilityForm = false;
    isFacilityGridView = true;
    FacilityViewName = 'List View';

    time = '08:00:50';

    isWalkIn = true;

    config = {
        displayKey: "description", //if objects array passed which key to be displayed defaults to description,
        search: true //enables the search plugin to search in the list
    }


    changeFacilityView() {
        this.isFacilityGridView = !this.isFacilityGridView;
        if (this.isFacilityGridView) {
            this.FacilityViewName = 'List View';
        }
        else {
            this.FacilityViewName = 'Grid View';
        }
        this.addFacilityForm = false;
    }




    isFacilityOnline = true;
    BOMForm = false;
    @ViewChild('partSupplyDropdown') partSupplyDropdown: SelectDropDownComponent;
    partSupplies = ["Drum Lid", "A-10 New Part", "Part 1", "The Chair"];

    changeFacilityStatus() {
        this.isFacilityOnline = !this.isFacilityOnline;
    }


    changeAssetsPartsBOM(num) {
        if (num == 1) {
            this.BOMForm = false;
        }
        else if (num == 2) {
            this.BOMForm = true;
        }
    }

    addAsset(assetName) {
        this.partSupplies.push(assetName);
        this.partSupplyDropdown.availableItems.push(assetName);
    }

    addFacility(facilityName, facilityCode, facilityCategory, facilityDescription) {
        this.facilitiesList.push({ name: facilityName, code: facilityCode, image: "assets/app/media/img/logos/logo-1.png", category: facilityCategory, description: facilityDescription });
        this.addFacilityForm = false;
    }

}
