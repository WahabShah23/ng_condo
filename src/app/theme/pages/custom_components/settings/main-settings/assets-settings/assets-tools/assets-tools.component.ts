import { SelectDropDownComponent } from 'ngx-select-dropdown';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-assets-tools',
  templateUrl: "./assets-tools.component.html",
  styleUrls: ["./assets-tools.component.css"]
})
export class AssetsToolsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  
  facilitiesList = [{name: "Hammer" , code: "Tool A(1)" , image: "http://news.freejdubai.com/wp-content/uploads/2012/12/hammer.jpg" , category:"Construction", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."},
  {name: "Grill Machine" , code: "Tool B(2)" , image: "https://5.imimg.com/data5/DN/VT/MY-6793191/bosch-hand-drill-machine-500x500.jpg" , category:"Repair", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."}];

  
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
@ViewChild('partSupplyDropdown') partSupplyDropdown: SelectDropDownComponent;
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

addAsset(assetName)
{
  this.partSupplies.push(assetName);
  this.partSupplyDropdown.availableItems.push(assetName);
}

addFacility(facilityName , facilityCode , facilityCategory , facilityDescription)
{
  this.facilitiesList.push({name: facilityName , code: facilityCode , image:"https://images.homedepot-static.com/productImages/ad6ce777-acfb-42a4-a3fd-b04b4c5c4e14/svn/klein-tools-electricians-tool-sets-mpz00050r-64_1000.jpg" , category: facilityCategory, description: facilityDescription });
  this.addFacilityForm = false;
}

}
