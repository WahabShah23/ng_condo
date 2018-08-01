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


  addGameForm = false;
  isGameGridView = true;
  GameViewName = 'List View';
  default_imgUrl = 'assets/app/media/img/custom/lounges/1.jpg';
  gameRooms = [
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
    this.isGameGridView = !this.isGameGridView;
    if (this.isGameGridView) {
        this.GameViewName = 'List View';
    }
    else {
        this.GameViewName = 'Grid View';
    }
    this.addGameForm = false;
}

addGame(gameName, img , numberOfParticipants, area, location, gameDescription) 
{
    this.gameRooms.push({name: gameName, img:img,  allowed: numberOfParticipants , floor:this.floorDropdownModel, area:area, location:location, description:gameDescription});
    this.isGameGridView = !this.isGameGridView;
    this.changeGameView();
    
}

deleteGame(id)
{
    this.gameRooms.splice(id,1);
}

}
