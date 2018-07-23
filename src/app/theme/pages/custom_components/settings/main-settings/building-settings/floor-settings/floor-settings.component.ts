import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-floor-settings',
    templateUrl: './floor-settings.component.html',
    styleUrls: ['./floor-settings.component.css']
})
export class FloorSettingsComponent implements OnInit {

    addFloorForm = false;
    isFloorGridView = true;
    FloorViewName = 'List View';
    buildingName = "ABC Building";
    floorType="Normal";

    constructor() { }

    ngOnInit() {
    }

    changeFloorView() {
        this.isFloorGridView = !this.isFloorGridView;
        if (this.isFloorGridView) {
            this.FloorViewName = 'List View';
        }
        else {
            this.FloorViewName = 'Grid View';
        }
        this.addFloorForm = false;
    }

    onFloorChanged(floor:string)
    {
        this.floorType = floor;
        console.log(floor=='Normal');
    }

}
