import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-party-rooms',
  templateUrl: "./party-rooms.component.html",
  styleUrls: ["./party-rooms.component.css"]
})
export class PartyRoomsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  addPartyForm = false;
  isPartyGridView = true;
  PartyViewName = 'List View';
  default_imgUrl = 'assets/app/media/img/custom/party-rooms/1.jpg';
  partyRooms = [
    {
        name: "Party Room 1", img: 'assets/app/media/img/custom/party-rooms/1.jpg', category: 'All', allowed: 100 , description: "Party Room for all occasions"
    },
    {
        name: 'Birthday Party Room', img: 'assets/app/media/img/custom/party-rooms/2.jpg', category: 'Birthday Party', allowed:80 , description: "Room for bithday celebrations"
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
