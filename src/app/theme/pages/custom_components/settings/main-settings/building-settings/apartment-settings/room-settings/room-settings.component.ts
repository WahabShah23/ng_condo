import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-room-settings',
  templateUrl: "./room-settings.component.html",
  styleUrls: ["./room-settings.component.css"]
})
export class RoomSettingsComponent implements OnInit {

  addRoomForm = false;
  isRoomGridView = true;
  RoomViewName = 'List View';

  constructor() { }

  ngOnInit() {
  }

  changeRoomView() 
  {
      this.isRoomGridView = !this.isRoomGridView;
      if (this.isRoomGridView) {
          this.RoomViewName = 'List View';
      }
      else {
          this.RoomViewName = 'Grid View';
      }
      this.addRoomForm = false;
  }


}
