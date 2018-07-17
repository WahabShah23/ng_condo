import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventory-building',
  templateUrl: "./inventory-building.component.html",
  styleUrls: ["./inventory-building.component.css"]
})
export class InventoryBuildingComponent implements OnInit {

  constructor() { }

  addInventoryForm = false;
  isInventoryGridView = true;
  InventoryViewName = 'List View';
  default_imgUrl = 'assets/app/media/img/custom/inventories/placeholder.png';
  Inventories = [
    {
        name: "Treadmill", img: 'assets/app/media/img/custom/inventories/treadmill.jpg', inventoryCat: 'Fitness', inventorySubCat: 'Treadmill', brand: 'PEL', desc: 'desc'
    },
    {
        name: 'Aid Kit', img: 'assets/app/media/img/custom/inventories/first aid.jpg', inventoryCat: 'Health', inventorySubCat: 'First Aid Kit', brand: 'GREE', desc: 'desc'
    }
   ];

   buildingName = "ABC Building";

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

addInventory(name: string, img: string, inventory_Cat: string, inventory_SubCat: string, inventory_brand: string, desc?: string) {
    this.Inventories.push({name: name, img:img, inventoryCat: inventory_Cat, inventorySubCat: inventory_SubCat, brand: inventory_brand, desc: desc });
    this.isInventoryGridView = !this.isInventoryGridView;
    this.changeInventoryView();
}

deleteInventory(id){
    console.log(id);
    this.Inventories.splice(id,1);
}

}
