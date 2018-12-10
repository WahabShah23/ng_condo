import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-projects-maintenance',
    templateUrl: "./projects-maintenance.component.html",
    styleUrls: ["./projects-maintenance.component.css"]
})
export class ProjectsMaintenanceComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }



    facilitiesList = [{ name: "Project ABC", image: "assets/app/media/img/logos/logo-3.png", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { name: "Project A(1)", image: "assets/app/media/img/logos/logo-3.png", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." }];


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







    addProject(projectName, projectDescription) {
        this.facilitiesList.push({ name: projectName, image: "assets/app/media/img/logos/logo-3.png", description: projectDescription });
        this.addFacilityForm = false;
    }



}
