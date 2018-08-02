import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lounge',
  templateUrl: "./lounge.component.html",
  styleUrls: ["./lounge.component.css"]
})
export class LoungeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  addLoungeForm = false;
  isLoungeGridView = true;
  LoungeViewName = 'List View';
  default_imgUrl = 'assets/app/media/img/custom/lounges/1.jpg';
  lounges = [
    {
        name: "Eating Lounge", img: 'assets/app/media/img/custom/lounges/1.jpg', allowed: 4 , floor:"4th", area:"10 sq/m", location:"North-East", description: "The Lounge 1"
    },
    {
        name: 'Lounge 2', img: 'assets/app/media/img/custom/lounges/1.jpg',  allowed:5 ,floor:"4th", area:"10 sq/m", location:"South-East", description: "The Lounge 2"
    }
   ];
   config = 
   {
    displayKey: "description", //if objects array passed which key to be displayed defaults to description,
    search: true //enables the search plugin to search in the list
   };
   floors = ["1", "2" , "3" , "4" , "5" , "6" , "7"];
   floorDropdownModel;

   buildingName = "ABC Building";

changeGameView() 
{
    this.isLoungeGridView = !this.isLoungeGridView;
    if (this.isLoungeGridView) {
        this.LoungeViewName = 'List View';
    }
    else {
        this.LoungeViewName = 'Grid View';
    }
    this.addLoungeForm = false;
}

addLounge(loungeName, img , loungeParticipants, area, location, loungeDescription) 
{
    this.lounges.push({name: loungeName, img:img,  allowed: loungeParticipants , floor:this.floorDropdownModel, area:area, location:location, description:loungeDescription});
    this.isLoungeGridView = !this.isLoungeGridView;
    this.changeGameView();
    
}

deleteLounge(id)
{
    this.lounges.splice(id,1);
}

}
