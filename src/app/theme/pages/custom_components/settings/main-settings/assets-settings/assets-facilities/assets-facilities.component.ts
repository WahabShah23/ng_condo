import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assets-facilities',
  templateUrl: "./assets-facilities.component.html",
  styleUrls: ["./assets-facilities.component.css"]
})
export class AssetsFacilitiesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  
  addBuildingForm = false;
  isBuildingGridView = true;
  BuildingViewName = 'List View';

  time = '08:00:50';

  isWalkIn = true;

  config = {
      displayKey: "description", //if objects array passed which key to be displayed defaults to description,
      search: true //enables the search plugin to search in the list
  }

  managementCompanies = ["Company A", "Company B", "Company C"];
  dataModel;


  owners = ["Owner A" , "Owner B", "Owner C", "Owner D"];

  ownerManagementType = "sameSame";

  changeBuildingView() {
    this.isBuildingGridView = !this.isBuildingGridView;
    if (this.isBuildingGridView) {
        this.BuildingViewName = 'List View';
    }
    else {
        this.BuildingViewName = 'Grid View';
    }
    this.addBuildingForm = false;
}


isFacilityOnline = true;
BOMForm = false;

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

}
