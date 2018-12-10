import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-task-groups',
    templateUrl: "./task-groups.component.html",
    styleUrls: ["./tasks-group.component.css"]
})
export class TaskGroupsComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    facilitiesList = [{ name: "TG1", image: "assets/app/media/img/logos/logo-3.png", tasks: 1 },
    { name: "TG2", image: "assets/app/media/img/logos/logo-3.png", tasks: 2 }];


    addFacilityForm = false;
    isFacilityGridView = true;
    FacilityViewName = 'List View';



    changeFacilityView() {
        this.isFacilityGridView = !this.isFacilityGridView;
        if (this.isFacilityGridView) {
            this.FacilityViewName = 'List View';
        }
        else {
            this.FacilityViewName = 'Grid View';
        }
        this.addFacilityForm = false;
    }







    addTaskCategory(taskCategory) {
        this.facilitiesList.push({ name: taskCategory, image: "assets/app/media/img/logos/logo-3.png", tasks: 1 });
        this.addFacilityForm = false;
    }


}
