import { SpecializedFacilityService } from './../../../../../../../../services/building-settings/specialized-facility.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { SelectDropDownComponent } from 'ngx-select-dropdown/dist/components';

@Component({
    selector: 'app-stock-building',
    templateUrl: "./stock-building.component.html",
    styleUrls: ["./stock-building.component.css"]
})
export class StockBuildingComponent implements OnInit {

    constructor(private specializedService: SpecializedFacilityService) { }

    ngOnInit() {
        this.Stocks = this.specializedService.getStock();
    }
    addSectionSelected = '';
    addStockForm = false;
    isStockGridView = true;
    StockViewName = 'List View';
    default_imgUrl = 'assets/app/media/img/custom/inventories/placeholder.png';
    Stocks;

    buildingName = "ABC Building";


    config = {
        displayKey: "description", //if objects array passed which key to be displayed defaults to description,
        search: true //enables the search plugin to search in the list
    };

    stockCategories = ["Electrical Appliances", "Parking", "Gym"];
    stockCategoryDropdownModel;

    stockSubCategories = ["Air Conditioner", "Microwave Oven", "Kettle"];
    stockSubCategoryDropdownModel;

    stockBrands = ["Orient", "Pel", "Mitsubishi"];
    stockBrandDropdownModel;

    @ViewChild('stockCategoryDropdown') stockCategoryDropdown: SelectDropDownComponent;
    @ViewChild('stockSubCategoryDropdown') stockSubCategoryDropdown: SelectDropDownComponent;
    @ViewChild('stockBrandDropdown') stockBrandDropdown: SelectDropDownComponent;

    changeStockView() {
        this.isStockGridView = !this.isStockGridView;
        if (this.isStockGridView) {
            this.StockViewName = 'List View';
        }
        else {
            this.StockViewName = 'Grid View';
        }
        this.addStockForm = false;
    }

    addStock(name: string, img: string, desc?: string) {
        this.specializedService.addStock(name, img, this.stockCategoryDropdownModel, this.stockSubCategoryDropdownModel, this.stockBrandDropdownModel, desc);
        this.isStockGridView = !this.isStockGridView;
        this.changeStockView();
    }

    deleteStock(id) {
        this.specializedService.deleteStock(id);
    }


    onAdd(name: string) {
        if (this.addSectionSelected == 'Brand') {
            this.stockBrands.push(name);
            this.stockBrandDropdown.availableItems.push(name);
        }
        else if (this.addSectionSelected == 'Category') {
            this.stockCategories.push(name);
            this.stockCategoryDropdown.availableItems.push(name);
        }
        else if (this.addSectionSelected == 'Subcategory') {

            this.stockSubCategories.push(name);
            this.stockSubCategoryDropdown.availableItems.push(name);
        }

    }

}
