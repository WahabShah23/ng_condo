import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventory-settings',
  templateUrl: "./inventory-settings.component.html",
  styleUrls: ["./inventory-settings.component.css"]
})
export class InventorySettingsComponent implements OnInit {

  addRoomForm = false;
  isRoomGridView = true;
  RoomViewName = 'List View';
  rows :[number] = [1];
  lastRowNumber = 1;
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

  addNewRoomRow()
  {
      this.rows.push(++this.lastRowNumber);

  }
  onDeleteRow(i)
  {
      this.rows.splice(i , 1);
      this.lastRowNumber = this.rows.length;
  }

}
