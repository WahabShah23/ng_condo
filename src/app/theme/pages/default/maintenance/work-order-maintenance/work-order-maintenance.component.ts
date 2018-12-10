import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-work-order-maintenance',
    templateUrl: "./work-order-maintenance.component.html",
    styleUrls: ['../../../../../../../node_modules/dragula/dist/dragula.css', "./work-order-maintenance.component.css"]
})

export class WorkOrderMaintenanceComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    isDisplayForm = true;
    viewNameService = "Add Work Order";
    isFacilityOnline = true;

    changeViewService() {
        this.isDisplayForm = !this.isDisplayForm;
        if (this.isDisplayForm) {
            this.viewNameService = "Add Work Order";
        }
        else {
            this.viewNameService = "View Work Orders";
        }
    }



    changeFacilityStatus() {
        this.isFacilityOnline = !this.isFacilityOnline;
    }

}
