import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-shops',
    templateUrl: "./shops.component.html",
    styleUrls: ["./shops.component.css"]
})
export class ShopsComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    visitType = "Walkin";
    searchField = false;
    addShopForm = false;
    isShopGridView = true;
    ShopViewName = 'List View';
    bookType = "Rentable";
    default_imgUrl = 'assets/app/media/img/custom/guest-suites/1.jpg';
    shops = [
        {
            name: "Shop 1", type: "Shopping Mall", img: 'assets/app/media/img/custom/guest-suites/1.jpg', area: '400 sq/m', allowed: 100, description: "A Cheap and Good Guest Suite", bookable: "Rentable"
        },
        {
            name: 'Shop 2', type: "Grocery", img: 'assets/app/media/img/custom/guest-suites/1.jpg', area: '300 sq/m', allowed: 80, description: "A Cheap and Good Guest Suite", bookable: "Sellable"
        }
    ];

    buildingName = "ABC Building";
    owners = ["Jabe", "Chris", "Jelly"];
    ownerDropdownModel;
    config = {
        displayKey: "description", //if objects array passed which key to be displayed defaults to description,
        search: true //enables the search plugin to search in the list
    };

    tenants = ["Jabe", "Chris", "Jelly"];
    tenantsDropdownModel;



    changeShopView() {
        this.isShopGridView = !this.isShopGridView;
        if (this.isShopGridView) {
            this.ShopViewName = 'List View';
        }
        else {
            this.ShopViewName = 'Grid View';
        }
        this.addShopForm = false;
    }

    addShop(guestSuiteName, img, guestType, guestSuiteCategory, guestSuiteSubCategory, guestSuiteCapacity, GuestSuiteDescription) {

        this.shops.push({ name: guestSuiteName, type: guestType, img: img, area: guestSuiteCategory, allowed: guestSuiteCapacity, description: GuestSuiteDescription, bookable: this.bookType });
        this.isShopGridView = !this.isShopGridView;
        this.changeShopView();
    }

    deleteShop(id) {
        this.shops.splice(id, 1);
    }

    onSearchClicked() {
        this.searchField = !this.searchField;
    }


}
