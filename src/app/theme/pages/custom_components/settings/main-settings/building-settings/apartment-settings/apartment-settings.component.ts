import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-apartment-settings',
    templateUrl: './apartment-settings.component.html',
    styleUrls: ['./apartment-settings.component.css']
})
export class ApartmentSettingsComponent implements OnInit {

    addApartmentForm = false;
    isApartmentGridView = true;
    ApartmentViewName = 'List View';
    buildingName = "ABC Building";
    constructor() { }

    ngOnInit() {
    }

    changeApartmentView() {
        this.isApartmentGridView = !this.isApartmentGridView;
        if (this.isApartmentGridView) {
            this.ApartmentViewName = 'List View';
        }
        else {
            this.ApartmentViewName = 'Grid View';
        }
        this.addApartmentForm = false;
    }

}
