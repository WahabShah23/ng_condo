import { SelectDropDownComponent } from 'ngx-select-dropdown';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-gym',
  templateUrl: "./gym.component.html",
  styleUrls: ["./gym.component.css"]
})
export class GymComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  addSectionSelected='';
  addGymForm = false;
  isGymGridView = true;
  GymViewName = 'List View';
  default_imgUrl = 'assets/app/media/img/custom/gym/dumbbell.jpg';
  GymItems = [
    {
        name: "Dumbbells", img: 'assets/app/media/img/custom/gym/dumbbell.jpg', category: 'Lifting', subcategory: 'Weight Lifting', description: 'Very High Quality Dumbbells For Building Muscles'
    },
    {
        name: 'Bench', img: 'assets/app/media/img/custom/gym/bench.png', category: 'subcategory', subcategory: 'Chest Workout' , description: 'Intense Chest Building Instrument'
    }
   ];

   buildingName = "ABC Building";


    gymCategories = ["Lifting", "Electrical" , "Mechancical"];
    gymCategoryDropdownModel;
    
    gymSubCategories = ["Weight Lifting", "Chest Workout" , "Cardio"];
    gymSubCategoryDropdownModel;

    @ViewChild('gymCategoryDropdown')  gymCategoryDropdown: SelectDropDownComponent;
    @ViewChild('gymSubCategoryDropdown')  gymSubCategoryDropdown: SelectDropDownComponent;

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

addGym(itemName, img , itemDescription) {
    this.GymItems.push({name: itemName, img:img, category: this.gymCategoryDropdownModel, subcategory: this.gymSubCategoryDropdownModel , description:itemDescription});
    this.isGymGridView = !this.isGymGridView;
    this.changeGymView();
}

deleteGym(id){
    console.log(id);
    this.GymItems.splice(id,1);
}


onAdd(name:string)
{
    if(this.addSectionSelected=='Category')
    {
        this.gymCategories.push(name);
        this.gymCategoryDropdown.availableItems.push(name);   
    }
    else if(this.addSectionSelected=='Subcategory')
    {

     this.gymSubCategories.push(name);
     this.gymSubCategoryDropdown.availableItems.push(name);   
    }


}
