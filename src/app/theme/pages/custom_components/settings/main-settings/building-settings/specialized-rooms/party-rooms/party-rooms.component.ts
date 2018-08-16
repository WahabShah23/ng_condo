import { SpecializedFacilityService } from './../../../../../../../../services/building-settings/specialized-facility.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-party-rooms',
    templateUrl: "./party-rooms.component.html",
    styleUrls: ["./party-rooms.component.css"]
})
export class PartyRoomsComponent implements OnInit {

    constructor(private specializedFacility: SpecializedFacilityService) { }

    ngOnInit() {
        this.partyRooms = this.specializedFacility.getPartyRooms();
    }
    addPartyForm = false;
    isPartyGridView = true;
    PartyViewName = 'List View';
    default_imgUrl = 'assets/app/media/img/custom/party-rooms/1.jpg';
    partyRooms;

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

    addParty(partyName, img, partyCategory, numberOfParticipants, roomDescription) {
        this.specializedFacility.addParty(partyName, img, partyCategory, numberOfParticipants, roomDescription);
        this.isPartyGridView = !this.isPartyGridView;
        this.changePartyView();
    }

    deleteParty(id) {
        this.specializedFacility.deleteParty(id);
    }

}
