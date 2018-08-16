import { RoomsService } from './../../../../../../../../services/roomsServices.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-room-types',
    templateUrl: "./room-types.component.html",
    styleUrls: ["./room-types.component.css"]
})
export class RoomTypesComponent implements OnInit {

    addRoomTypeForm = false;
    isRoomTypeGridView = true;
    RoomTypeViewName = 'List View';
    default_imgUrl = 'assets/app/media/img/custom/party-rooms/1.jpg';
    roomTypes;

    buildingName = "ABC Building";

    constructor(private roomService: RoomsService) { }

    ngOnInit() {
        this.roomTypes = this.roomService.getRoomsTypes();
    }



    changeRoomTypeView() {
        this.isRoomTypeGridView = !this.isRoomTypeGridView;
        if (this.isRoomTypeGridView) {
            this.RoomTypeViewName = 'List View';
        }
        else {
            this.RoomTypeViewName = 'Grid View';
        }
        this.addRoomTypeForm = false;
    }

    addRoomType(partyName, img, roomDescription) {

        this.roomService.addRoomType(partyName, img, roomDescription);
        this.isRoomTypeGridView = !this.isRoomTypeGridView;
        this.changeRoomTypeView();
    }

    deleteRoomType(id) {
        this.roomService.deleteRoomType(id);
    }

}
