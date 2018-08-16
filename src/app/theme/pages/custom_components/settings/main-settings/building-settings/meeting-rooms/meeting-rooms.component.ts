import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-meeting-rooms',
    templateUrl: "./meeting-rooms.component.html",
    styleUrls: ["./meeting-rooms.component.css"]
})
export class MeetingRoomsComponent implements OnInit {

    constructor() { }


    ngOnInit() {

    }
    addMeetingRoomForm = false;
    isMeetingRoomGridView = true;
    meetingRoomViewName = 'List View';
    default_imgUrl = 'assets/app/media/img/custom/meeting-rooms/1.jpeg';
    meetingRooms =
        [
            {
                name: "Long Meetings Room", img: 'assets/app/media/img/custom/meeting-rooms/1.jpeg', allowed: 4, floor: "4th", area: "10 sq/m", location: "North-East", description: "It is the long meetings Room"
            },
            {
                name: 'Short Meetings Room', img: 'assets/app/media/img/custom/meeting-rooms/1.jpeg', allowed: 5, floor: "4th", area: "10 sq/m", location: "South-East", description: "It is the short meetings Room"
            }
        ];
    config =
        {
            displayKey: "description", //if objects array passed which key to be displayed defaults to description,
            search: true //enables the search plugin to search in the list
        };
    floors = ["1", "2", "3", "4", "5", "6", "7"];
    floorDropdownModel;

    buildingName = "ABC Building";

    changeGameView() {
        this.isMeetingRoomGridView = !this.isMeetingRoomGridView;
        if (this.isMeetingRoomGridView) {
            this.meetingRoomViewName = 'List View';
        }
        else {
            this.meetingRoomViewName = 'Grid View';
        }
        this.addMeetingRoomForm = false;
    }

    addMeetingRoom(meetingRoomName, img, meetingRoomParticipants, area, location, meetingRoomDescription) {
        this.meetingRooms.push({ name: meetingRoomName, img: img, allowed: meetingRoomParticipants, floor: this.floorDropdownModel, area: area, location: location, description: meetingRoomDescription });
        this.isMeetingRoomGridView = !this.isMeetingRoomGridView;
        this.changeGameView();

    }

    deleteMeetingRoom(id) {
        this.meetingRooms.splice(id, 1);
    }

}
