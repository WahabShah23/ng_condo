import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parking',
  templateUrl: "./parking.component.html",
  styleUrls: ["./parking.component.css"]
})
export class ParkingComponent implements OnInit {

  constructor() { }

  ngOnInit() 
  {

  }
  bookType="Non-Bookable";
  addParkingForm = false;
  isParkingGridView = true;
  ParkingViewName = 'List View';
  showSearch = false;
  default_imgUrl = 'assets/app/media/img/custom/parking/parking.gif';
  isResidantParking = true;
  Parkings = [
    {
        number:1 , apartment: "20-B", img: 'assets/app/media/img/custom/parking/parking.gif', area: '20 sq/m', location: 'East'
    },
    {
      number:2, apartment: "21-C", img: 'assets/app/media/img/custom/parking/parking.gif', area: '30 sq/m', location: 'North-West'
    }
   ];

   buildingName = "ABC Building";

    owners = ["Jabe", "Chris" , "Jelly"];
    ownerDropdownModel;
    config = {
        displayKey: "description", //if objects array passed which key to be displayed defaults to description,
        search: true //enables the search plugin to search in the list
    }


   changeParkingView() {
    this.isParkingGridView = !this.isParkingGridView;
    if (this.isParkingGridView) {
        this.ParkingViewName = 'List View';
    }
    else {
        this.ParkingViewName = 'Grid View';
    }
    this.addParkingForm = false;
}

addParking(parkingNumber: number, img , parkingName : string, parkingArea: string, parkingLocation:string) {
    this.Parkings.push({number: parkingNumber, apartment:parkingName,  img:img, area: parkingArea, location: parkingLocation});
    this.isParkingGridView = !this.isParkingGridView;
    this.changeParkingView();
}

deleteParking(id){
    console.log(id);
    this.Parkings.splice(id,1);
}

onSearchClicked()
{
    this.showSearch = !this.showSearch;
}


onParkingTypeChanged(parkingType: string)
{
    (parkingType=="Resident") ? this.isResidantParking=true : this.isResidantParking=false;
}

}
