import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gym',
  templateUrl: "./gym.component.html",
  styleUrls: ["./gym.component.css"]
})
export class GymComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  addGymForm = false;
  isGymGridView = true;
  GymViewName = 'List View';
  default_imgUrl = 'assets/app/media/img/custom/gym/dumbbell.jpg';
  GymItems = [
    {
        name: "Dumbbells", img: 'assets/app/media/img/custom/gym/dumbbell.jpg', category: 'Lifting', placement: 'Weight Lifting'
    },
    {
        name: 'Bench', img: 'assets/app/media/img/custom/gym/bench.png', category: 'Lifting', placement: 'Chest Workout'
    }
   ];

   buildingName = "ABC Building";

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

addGym(itemName, img , itemCategory, itemPlacement) {
    this.GymItems.push({name: itemName, img:img, category: itemCategory, placement: itemPlacement});
    this.isGymGridView = !this.isGymGridView;
    this.changeGymView();
}

deleteGym(id){
    console.log(id);
    this.GymItems.splice(id,1);
}

}
