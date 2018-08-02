import { Component, OnInit, ViewChild } from '@angular/core';
import { SelectDropDownComponent } from 'ngx-select-dropdown/dist/components';

@Component({
  selector: 'app-stock-building',
  templateUrl: "./stock-building.component.html",
  styleUrls: ["./stock-building.component.css"]
})
export class StockBuildingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  addSectionSelected='';
  addStockForm = false;
  isStockGridView = true;
  StockViewName = 'List View';
  default_imgUrl = 'assets/app/media/img/custom/inventories/placeholder.png';
  Stocks = [
    {
        name: "A4 Paper", img: 'assets/app/media/img/custom/stock/A4 Size Paper.jpg', stockCat: 'Printing Material', stockSubCat: 'A4 Size Paper.jpg', brand: 'PEL', desc: 'desc'
    },
    {
        name: 'Biscuit', img: 'assets/app/media/img/custom/stock/biscuit.jpg', stockCat: 'Tuck Shop', stockSubCat: 'Buscuit', brand: 'GREE', desc: 'desc'
    }
   ];

   buildingName = "ABC Building";


   config = {
    displayKey: "description", //if objects array passed which key to be displayed defaults to description,
    search: true //enables the search plugin to search in the list
};

stockCategories = ["Electrical Appliances", "Parking" , "Gym"];
stockCategoryDropdownModel;

stockSubCategories = ["Air Conditioner", "Microwave Oven" , "Kettle"];
stockSubCategoryDropdownModel;

stockBrands = ["Orient", "Pel" , "Mitsubishi"];
stockBrandDropdownModel;

@ViewChild('stockCategoryDropdown')  stockCategoryDropdown: SelectDropDownComponent;
@ViewChild('stockSubCategoryDropdown')  stockSubCategoryDropdown: SelectDropDownComponent;
@ViewChild('stockBrandDropdown')  stockBrandDropdown: SelectDropDownComponent;

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
    this.Stocks.push({name: name, img:img, stockCat: this.stockCategoryDropdownModel, stockSubCat: this.stockSubCategoryDropdownModel, brand: this.stockBrandDropdownModel, desc: desc });
    this.isStockGridView = !this.isStockGridView;
    this.changeStockView();
}

deleteStock(id){
    console.log(id);
    this.Stocks.splice(id,1);
}


onAdd(name:string)
{
    if(this.addSectionSelected=='Brand')
    {
     this.stockBrands.push(name);
     this.stockBrandDropdown.availableItems.push(name);   
    }
    else if(this.addSectionSelected=='Category')
    {
        this.stockCategories.push(name);
        this.stockCategoryDropdown.availableItems.push(name);   
    }
    else if(this.addSectionSelected=='Subcategory')
    {

     this.stockSubCategories.push(name);
     this.stockSubCategoryDropdown.availableItems.push(name);   
    }

}

}
