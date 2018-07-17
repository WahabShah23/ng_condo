import {Component, OnInit, Renderer2, ElementRef, ViewChild} from '@angular/core';
import { InventoriesService } from "../../../../../../services/inventories.service";

@Component({
  selector: 'app-inventory-global-settings',
  templateUrl: './inventory-global-settings.component.html',
  styleUrls: ['./inventory-global-settings.component.css']
})
export class InventoryGlobalSettingsComponent implements OnInit {

    config = {
        displayKey: "description", //if objects array passed which key to be displayed defaults to description,
        search: true //enables the search plugin to search in the list
    }

    @ViewChild('inventoryCat') private inventoryCat: ElementRef;
    @ViewChild('brandDropdown') private brandDropdown: ElementRef;

    addInventoryForm = false;
    isInventoryGridView = true;
    InventoryViewName = 'List View';
    default_imgUrl = 'assets/app/media/img/custom/inventories/placeholder.png';

    brands = ["Pel", "Samsung", "Orient"];
    Inventories;  // Inventories property for inventory service implementation

    constructor( inventory_service: InventoriesService, private renderer: Renderer2, private el: ElementRef) {
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

    getCat(name: string) {
        console.log(name);
        const option = this.renderer.createElement('option');
        const text = this.renderer.createText(name);

        this.renderer.appendChild(option, text);
        this.renderer.appendChild(this.inventoryCat.nativeElement, option);

    }

    addBrand(name: string) {
        console.log(name);
        const option = this.renderer.createElement('option');
        const text = this.renderer.createText(name);

        this.renderer.appendChild(option, text);
        this.renderer.appendChild(this.brandDropdown.nativeElement, option);

    }

}
