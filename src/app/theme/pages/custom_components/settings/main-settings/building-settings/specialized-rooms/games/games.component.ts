import { Component, OnInit } from '@angular/core';
import { SpecializedFacilityService } from '../../../../../../../../services/building-settings/specialized-facility.service';

@Component({
  selector: 'app-games',
  templateUrl: "./games.component.html",
  styleUrls: ["./games.component.css"]
})
export class GamesComponent implements OnInit {

  constructor(private specializedService: SpecializedFacilityService) 
  {
      this.gameRooms = this.specializedService.getGameRooms();
   }
  ngOnInit() {
  }

  addGameForm = false;
  isGameGridView = true;
  GameViewName = 'List View';
  visitType='Walkin';
  default_imgUrl = 'assets/app/media/img/custom/party-rooms/1.jpg';
  gameRooms;

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
     this.specializedService.addGame(gameName , img , gameCategory , numberOfParticipants , this.visitType , gameDescription);
    this.isGameGridView = !this.isGameGridView;
    this.changeGameView();
    this.visitType = "Walkin";
}

deleteGame(id){
    this.specializedService.deleteGame(id);
}

}
