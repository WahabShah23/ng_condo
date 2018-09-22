import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assigned-work-orders',
  templateUrl: "./assigned-work-orders.component.html",
  styleUrls: ["./assigned-work-orders.component.css"]
})
export class AssignedWorkOrdersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  wo = 2;
  facilitiesList = [{ name: "WO 1" , image: "assets/app/media/img/logos/logo-3.png", status: "Open (Active)" , maintenanceType:"Damage" , priority: "High" , asset: "Asset A(1)" , project: "Project A"},
  { name: "WO 2" , image: "assets/app/media/img/logos/logo-3.png", status: "Assigned (Active)" , maintenanceType:"Safety" , priority: "Low" , asset: "Asset A(2)" , project: "Project B"}];

  isFacilityOnline=true;
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


changeFacilityStatus()
{
  this.isFacilityOnline = !this.isFacilityOnline;
}


addWorkOrder(status, maintenanceType , priority , asset, project)
{

  this.facilitiesList.push({ name: "WO "+(++this.wo), image: "assets/app/media/img/logos/logo-3.png" , status,maintenanceType,priority,asset,project});
  this.addFacilityForm = false;
}

}
