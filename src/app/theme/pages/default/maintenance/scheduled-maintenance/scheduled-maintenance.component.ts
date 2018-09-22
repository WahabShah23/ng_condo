import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scheduled-maintenance',
  templateUrl: "./scheduled-maintenance.component.html",
  styleUrls: ["./scheduled-maintenance.component.css"]
})
export class ScheduledMaintenanceComponent implements OnInit {

  constructor() { }

  ngOnInit() {


  }

  facilitiesList = [{ code: "SM8" , image: "assets/app/media/img/logos/logo-3.png", status:"Open" , project:"Project 1", asset: "Facility A", maintenanceType:"Project", priority:"High"},
  { code: "SM9" , image: "assets/app/media/img/logos/logo-3.png", status:"Closed (Completed)" , project:"Project A2", asset: "Facility A(4)", maintenanceType:"Safety", priority:"Moderate"}];

  
  addFacilityForm = false;
  isFacilityGridView = true;
  FacilityViewName = 'List View';

  time = '08:00:50';

  isWalkIn = true;

  
  config = {
    displayKey: "description", //if objects array passed which key to be displayed defaults to description,
    search: true //enables the search plugin to search in the list
}


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




isFacilityOnline = true;
BOMForm = false;
partSupplies = ["Drum Lid" , "A-10 New Part" , "Part 1" , "The Chair"];

changeFacilityStatus()
{
this.isFacilityOnline = !this.isFacilityOnline;
}


changeAssetsPartsBOM(num)
{
if(num==1)
{
  this.BOMForm = false;
}
else if(num==2)
{
  this.BOMForm = true;
}
}


addSchedule(scheduleCode , workOrderStatus , scheduleProject , scheduleAsset, schedulePriority , scheduleMaintenanceType)
{
  this.facilitiesList.push({ code: scheduleCode , image: "assets/app/media/img/logos/logo-3.png", status:workOrderStatus , project:scheduleProject, asset: scheduleAsset, maintenanceType:scheduleMaintenanceType, priority:schedulePriority});
  this.addFacilityForm = false;
}

}
