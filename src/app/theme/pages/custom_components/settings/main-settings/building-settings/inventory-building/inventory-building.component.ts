import { SelectDropDownComponent } from 'ngx-select-dropdown';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-inventory-building',
  templateUrl: "./inventory-building.component.html",
  styleUrls: ["./inventory-building.component.css"]
})
export class InventoryBuildingComponent implements OnInit {

  constructor() { }

  addSectionSelected='';
  addInventoryForm = false;
  isInventoryGridView = true;
  InventoryViewName = 'List View';
  default_imgUrl = 'assets/app/media/img/custom/inventories/placeholder.png';
  Inventories = [
    {
        name: "Treadmill", img: 'assets/app/media/img/custom/inventories/treadmill-icon.png', inventoryCat: 'Fitness', inventorySubCat: 'Treadmill', brand: 'PEL', desc: 'desc'
    },
    {
        name: 'Aid Kit', img: 'assets/app/media/img/custom/inventories/aid-kit.png', inventoryCat: 'Health', inventorySubCat: 'First Aid Kit', brand: 'GREE', desc: 'desc'
    }
   ];

   buildingName = "ABC Building";


   config = {
       displayKey: "description", //if objects array passed which key to be displayed defaults to description,
       search: true //enables the search plugin to search in the list
   };

   inventoryCategories = ["Electrical Appliances", "Parking" , "Gym"];
   inventoryCategoryDropdownModel;

   inventorySubCategories = ["Air Conditioner", "Microwave Oven" , "Kettle"];
   inventorySubCategoryDropdownModel;

   inventoryBrands = ["Orient", "Pel" , "Mitsubishi"];
   inventoryBrandDropdownModel;

   @ViewChild('inventoryCategoryDropdown')  inventoryCategoryDropdown: SelectDropDownComponent;
    @ViewChild('inventorySubCategoryDropdown')  inventorySubCategoryDropdown: SelectDropDownComponent;
    @ViewChild('inventoryBrandDropdown')  inventoryBrandDropdown: SelectDropDownComponent;


  ngOnInit() {
  }
  changeInventoryView() {
    this.isInventoryGridView = !this.isInventoryGridView;
    if (this.isInventoryGridView) {
        this.InventoryViewName = 'List View';
    }
    else {
        this.InventoryViewName = 'Grid View';
    }
    this.addInventoryForm = false;
}

addInventory(name: string, img: string, desc: string) 
{
    this.Inventories.push({name: name, img:img, inventoryCat: this.inventoryCategoryDropdownModel, inventorySubCat: this.inventorySubCategoryDropdownModel, brand: this.inventoryBrandDropdownModel, desc: desc });
    this.isInventoryGridView = !this.isInventoryGridView;
    this.changeInventoryView();
}

deleteInventory(id){
    console.log(id);
    this.Inventories.splice(id,1);
}


onAdd(name:string)
{
    if(this.addSectionSelected=='Brand')
    {
     this.inventoryBrands.push(name);
     this.inventoryBrandDropdown.availableItems.push(name);   
    }
    else if(this.addSectionSelected=='Category')
    {
        this.inventoryCategories.push(name);
        this.inventoryCategoryDropdown.availableItems.push(name);   
    }
    else if(this.addSectionSelected=='Subcategory')
    {

     this.inventorySubCategories.push(name);
     this.inventorySubCategoryDropdown.availableItems.push(name);   
    }

}

}
