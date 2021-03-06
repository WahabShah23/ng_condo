import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
    selector: 'app-guest-suites',
    templateUrl: "./guest-suites.component.html",
    styleUrls: ["./guest-suites.component.css"]
})
export class GuestSuitesComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    searchField = false;
    addSuiteForm = false;
    isSuiteGridView = true;
    SuiteViewName = 'List View';
    bookType = "Non-Bookable";
    default_imgUrl = 'assets/app/media/img/custom/guest-suites/1.jpg';
    suites = [
        {
            name: "Small Suite", img: 'assets/app/media/img/custom/guest-suites/1.jpg', category: 'Economy', subCategory: "One Bed", allowed: 100, description: "A Cheap and Good Guest Suite", bookable: "Non-Bookable"
        },
        {
            name: 'Moderate Suite', img: 'assets/app/media/img/custom/guest-suites/1.jpg', category: 'Business', subCategory: "Three Bed", allowed: 80, description: "A Cheap and Good Guest Suite", bookable: "Bookable"
        }
    ];

    buildingName = "ABC Building";

    changeSuiteView() {
        this.isSuiteGridView = !this.isSuiteGridView;
        if (this.isSuiteGridView) {
            this.SuiteViewName = 'List View';
        }
        else {
            this.SuiteViewName = 'Grid View';
        }
        this.addSuiteForm = false;
    }

    addSuite(guestSuiteName, img, guestSuiteCategory, guestSuiteSubCategory, guestSuiteCapacity, GuestSuiteDescription) {

        this.suites.push({ name: guestSuiteName, img: img, category: guestSuiteCategory, subCategory: guestSuiteSubCategory, allowed: guestSuiteCapacity, description: GuestSuiteDescription, bookable: "Non-bookable" });
        this.isSuiteGridView = !this.isSuiteGridView;
        this.changeSuiteView();
    }

    deleteGuestSuite(id) {
        console.log(id);
        this.suites.splice(id, 1);
    }

    onSearchClicked() {
        this.searchField = !this.searchField;
    }



}
