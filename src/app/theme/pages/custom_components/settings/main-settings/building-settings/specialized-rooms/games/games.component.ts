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

  addPartyForm = false;
  isPartyGridView = true;
  PartyViewName = 'List View';
  default_imgUrl = 'assets/app/media/img/custom/party-rooms/1.jpg';
  partyRooms = [
    {
        name: "Table Tennis", img: 'assets/app/media/img/custom/games/1.jpg', category: 'indoor', allowed: 4 , description: "Table Tennis Room"
    },
    {
        name: 'Squash', img: 'assets/app/media/img/custom/games/2.jpg', category: 'indoor', allowed:5 , description: "Squash Room"
    }
   ];

   buildingName = "ABC Building";

   changePartyView() {
    this.isPartyGridView = !this.isPartyGridView;
    if (this.isPartyGridView) {
        this.PartyViewName = 'List View';
    }
    else {
        this.PartyViewName = 'Grid View';
    }
    this.addPartyForm = false;
}

addParty(partyName, img , partyCategory, numberOfParticipants, roomDescription) {
  console.log(numberOfParticipants);
    this.partyRooms.push({name: partyName, img:img, category: partyCategory, allowed: numberOfParticipants , description:roomDescription});
    this.isPartyGridView = !this.isPartyGridView;
    this.changePartyView();
}

deleteParty(id){
    console.log(id);
    this.partyRooms.splice(id,1);
}

}
