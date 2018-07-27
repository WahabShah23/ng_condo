import {Component, OnInit, Renderer2, ElementRef, ViewChild} from '@angular/core';
import { InventoriesService } from "../../../../../../services/inventories.service";
import { SelectDropDownComponent } from "ngx-select-dropdown";

@Component({
  selector: 'app-inventory-global-settings',
  templateUrl: './item-global-settings.component.html',
  styleUrls: ['./item-global-settings.component.css']
})
export class ItemGlobalSettingsComponent implements OnInit {

    config = {
        displayKey: "description", //if objects array passed which key to be displayed defaults to description,
        search: true //enables the search plugin to search in the list
    }

    // @ViewChild('inventoryCat')  inventoryCat: ElementRef;
    @ViewChild('amenitiesDropdown')  itemCat: SelectDropDownComponent;
    @ViewChild('itemSubCat')  itemSubCat: SelectDropDownComponent;
    @ViewChild('brandDropdown')  brandDropdown: SelectDropDownComponent;


    addInventoryForm = false;
    isInventoryGridView = true;
    InventoryViewName = 'List View';
    default_imgUrl = 'assets/app/media/img/custom/inventories/placeholder.png';


    categories = ["Electrical Appliances", "Toiletries", "Furniture"];
    subCategories = ["Air Conditioner", "Microwave Oven", "Kettle"];
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

    addItem(name: string, img: string, item_Cat: string, item_SubCat: string, item_brand: string, desc?: string) {
        this.Inventories.push({name: name, img:img, inventoryCat: item_Cat, inventorySubCat: item_SubCat, brand: item_brand, desc: desc });
        this.isInventoryGridView = !this.isInventoryGridView;
        this.changeInventoryView();
    }

    deleteInventory(id){
        console.log(id);
        this.Inventories.splice(id,1);
    }

    addCat(name: string) {
        console.log(name);
        this.categories.push(name);
        this.itemCat.availableItems.push(name);

        // const option = this.renderer.createElement('option');
        // const text = this.renderer.createText(name);
        //
        // this.renderer.appendChild(option, text);
        // this.renderer.appendChild(this.inventoryCat.nativeElement, option);

    }

    addSubCategory(name:string){
        this.subCategories.push(name);
        this.itemSubCat.availableItems.push(name);
    }

    addBrand(name: string) {
        this.brands.push(name);
        this.brandDropdown.availableItems.push(name);

        // const option = this.renderer.createElement('option');
        // const text = this.renderer.createText(name);
        // this.renderer.appendChild(option, text);
        // this.renderer.appendChild(this.brandDropdown.nativeElement, option);
    }

}
