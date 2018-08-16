import { SpecializedFacilityService } from './../../../../../../../../services/building-settings/specialized-facility.service';
import { SelectDropDownComponent } from 'ngx-select-dropdown';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
    selector: 'app-gym',
    templateUrl: "./gym.component.html",
    styleUrls: ["./gym.component.css"]
})
export class GymComponent implements OnInit {

    constructor(private specializedService: SpecializedFacilityService) { }

    ngOnInit() {
        this.GymItems = this.specializedService.getGymItems();
    }
    addSectionSelected = '';
    addGymForm = false;
    isGymGridView = true;
    GymViewName = 'List View';
    default_imgUrl = 'assets/app/media/img/custom/gym/dumbbell.jpg';
    GymItems;

    buildingName = "ABC Building";


    gymCategories = ["Lifting", "Electrical", "Mechancical"];
    gymCategoryDropdownModel;

    gymSubCategories = ["Weight Lifting", "Chest Workout", "Cardio"];
    gymSubCategoryDropdownModel;

    @ViewChild('gymCategoryDropdown') gymCategoryDropdown: SelectDropDownComponent;
    @ViewChild('gymSubCategoryDropdown') gymSubCategoryDropdown: SelectDropDownComponent;

    changeGymView() {
        this.isGymGridView = !this.isGymGridView;
        if (this.isGymGridView) {
            this.GymViewName = 'List View';
        }
        else {
            this.GymViewName = 'Grid View';
        }
        this.addGymForm = false;
    }

    addGym(itemName, img, itemDescription) {
        this.specializedService.addGym(itemName, img, this.gymCategoryDropdownModel, this.gymSubCategoryDropdownModel, itemDescription);
        this.isGymGridView = !this.isGymGridView;
        this.changeGymView();
    }

    deleteGym(id) {
        this.specializedService.deleteGym(id);
    }


    onAdd(name: string) {
        if (this.addSectionSelected == 'Category') {
            this.gymCategories.push(name);
            this.gymCategoryDropdown.availableItems.push(name);
        }
        else if (this.addSectionSelected == 'Subcategory') {

            this.gymSubCategories.push(name);
            this.gymSubCategoryDropdown.availableItems.push(name);
        }


    }

}
