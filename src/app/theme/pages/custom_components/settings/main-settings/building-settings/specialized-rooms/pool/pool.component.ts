import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pool',
  templateUrl: "./pool.component.html",
  styleUrls: ["./pool.component.css"]
})
export class PoolComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  addGameForm = false;
  isGameGridView = true;
  GameViewName = 'List View';
  visitType='SplashBased';
  default_imgUrl = 'assets/app/media/img/custom/party-rooms/1.jpg';
  gameRooms = [
    {
        name: "Pool 1", img: 'assets/app/media/img/custom/pools/1.jpg', allowed: 4 , visitType:"Laned Based", description: "The Swimming Pool"
    },
    {
        name: 'Pool 2', img: 'assets/app/media/img/custom/pools/2.jpg', allowed:5 , visitType:"Splash Based", description: "The Swimming Poolssss"
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

addGame(gameName, img , numberOfParticipants, gameDescription) {
    this.gameRooms.push({name: gameName, img:img,  allowed: numberOfParticipants , visitType:this.visitType, description:gameDescription});
    this.isGameGridView = !this.isGameGridView;
    this.changeGameView();
    this.visitType = "Walkin";
}

deleteGame(id){
    this.gameRooms.splice(id,1);
}

}
