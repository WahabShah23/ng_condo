import { Component, OnInit } from '@angular/core';
import { InventoriesService } from "../../../../../../services/inventories.service";

@Component({
  selector: 'app-inventory-global-settings',
  templateUrl: './inventory-global-settings.component.html',
  styleUrls: ['./inventory-global-settings.component.css']
})
export class InventoryGlobalSettingsComponent implements OnInit {

    addInventoryForm = false;
    isInventoryGridView = true;
    InventoryViewName = 'List View';
    default_imgUrl = 'assets/app/media/img/custom/inventories/placeholder.png';


    Inventories;  // Inventories property for inventory service implementation

    constructor( inventory_service: InventoriesService) {
        // let inventory_service = new InventoriesService();     //NOT GOOD APPROACH, IT MAKES IT TIGHTLY COUPLED TOO!
        this.Inventories = inventory_service.getInventories();
    }

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
