import { Component, OnInit, ViewChild } from '@angular/core';
import { SelectDropDownComponent } from "ngx-select-dropdown";
@Component({
    selector: 'app-assets-equipments',
    templateUrl: "./assets-equipments.component.html",
    styleUrls: ["./assets-equipments.component.css"]
})
export class AssetsEquipmentsComponent implements OnInit {

    constructor() { }


    ngOnInit() {
    }


    facilitiesList = [{ name: "Dumbbell", code: "Equipment A(1)", image: "assets/app/media/img/custom/gym/dumbbell.jpg", category: "Gym", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { name: "Bed", code: "Equipment B(2)", image: "assets/app/media/img/custom/inventories/bed.jpg", category: "Bedroom", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." }];


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
        this.facilitiesList.push({ name: facilityName, code: facilityCode, image: "https://cdn.shopify.com/s/files/1/0403/7029/products/FG81150_1024x1024.png", category: facilityCategory, description: facilityDescription });
        this.addFacilityForm = false;
    }

}
