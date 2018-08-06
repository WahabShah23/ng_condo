import { SpecializedFacilityService } from './../../../../../../../../services/building-settings/specialized-facility.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lounge',
  templateUrl: "./lounge.component.html",
  styleUrls: ["./lounge.component.css"]
})
export class LoungeComponent implements OnInit {

  constructor(private specializedService: SpecializedFacilityService) { }

  ngOnInit() {
      this.lounges = this.specializedService.getLounges();
  }


  addLoungeForm = false;
  isLoungeGridView = true;
  LoungeViewName = 'List View';
  default_imgUrl = 'assets/app/media/img/custom/lounges/1.jpg';
  lounges;
   config = 
   {
    displayKey: "description", //if objects array passed which key to be displayed defaults to description,
    search: true //enables the search plugin to search in the list
   };
   floors = ["1", "2" , "3" , "4" , "5" , "6" , "7"];
   floorDropdownModel;

   buildingName = "ABC Building";

changeGameView() 
{
    this.isLoungeGridView = !this.isLoungeGridView;
    if (this.isLoungeGridView) {
        this.LoungeViewName = 'List View';
    }
    else {
        this.LoungeViewName = 'Grid View';
    }
    this.addLoungeForm = false;
}

addLounge(loungeName, img , loungeParticipants, area, location, loungeDescription) 
{
     this.specializedService.addLounge(loungeName , img , loungeParticipants , this.floorDropdownModel , area , location , loungeDescription);
    this.isLoungeGridView = !this.isLoungeGridView;
    this.changeGameView();
}

deleteLounge(id)
{
   this.specializedService.deleteLounge(id);

}
}