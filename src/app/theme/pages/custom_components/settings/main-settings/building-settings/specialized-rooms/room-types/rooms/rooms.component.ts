import { RoomsService } from './../../../../../../../../../services/roomsServices.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rooms',
  templateUrl: "./rooms.component.html",
  styleUrls: ["./rooms.component.css"]
})
export class RoomsComponent implements OnInit {



  index;
  addRoomTypeForm = false;
  isRoomTypeGridView = true;
  RoomTypeViewName = 'List View';
  default_imgUrl = 'assets/app/media/img/custom/party-rooms/1.jpg';
  roomType;

  buildingName = "ABC Building";


  constructor(private roomService: RoomsService , private activateRoute: ActivatedRoute) { }

  ngOnInit() 
  {
      this.index = +this.activateRoute.snapshot.params['id'];
      this.roomType = this.roomService.getRoomTypeByIndex(this.index);
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

addRoom(roomName, img, roomDescription) 
{
    this.roomService.addRoomToIndexOfType(this.index , roomName, img, roomDescription);
    
    this.isRoomTypeGridView = !this.isRoomTypeGridView;
    this.changeRoomTypeView();
}

deleteRoom(id)
{
    // console.log(id);
    // this.roomType.splice(id,1);

    this.roomService.deleteRoomFromType(this.index , id);
}

}
