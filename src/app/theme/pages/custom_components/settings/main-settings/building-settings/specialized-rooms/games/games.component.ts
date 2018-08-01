import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-games',
  templateUrl: "./games.component.html",
  styleUrls: ["./games.component.css"]
})
export class GamesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  addGameForm = false;
  isGameGridView = true;
  GameViewName = 'List View';
  visitType='Walkin';
  default_imgUrl = 'assets/app/media/img/custom/party-rooms/1.jpg';
  gameRooms = [
    {
        name: "Table Tennis", img: 'assets/app/media/img/custom/games/1.jpg', category: 'indoor', allowed: 4 , visitType:"Walking", description: "Table Tennis Room"
    },
    {
        name: 'Squash', img: 'assets/app/media/img/custom/games/2.jpg', category: 'indoor', allowed:5 , visitType:"Bookable", description: "Squash Room"
    }
   ];

   buildingName = "ABC Building";

   changeGameView() {
    this.isGameGridView = !this.isGameGridView;
    if (this.isGameGridView) {
        this.GameViewName = 'List View';
    }
    else {
        this.GameViewName = 'Grid View';
    }
    this.addGameForm = false;
}

addGame(gameName, img , gameCategory, numberOfParticipants, gameDescription) {
    this.gameRooms.push({name: gameName, img:img, category: gameCategory, allowed: numberOfParticipants , visitType:this.visitType, description:gameDescription});
    this.isGameGridView = !this.isGameGridView;
    this.changeGameView();
    this.visitType = "Walkin";
}

deleteGame(id){
    this.gameRooms.splice(id,1);
}

}
