import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotels',
  templateUrl: "./hotels.component.html",
  styleUrls: ["./hotels.component.css"]
})
export class HotelsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  searchField= false;
  addHotelForm = false;
  isHotelGridView = true;
  hotelViewName = 'List View';
  bookType="Rentable";
  default_imgUrl = 'assets/app/media/img/custom/guest-suites/1.jpg';
  hotels= [
    {
        name: "Hotel Room 1", type:"Single Storey", img: 'assets/app/media/img/custom/guest-suites/1.jpg', area: '400 sq/m' , allowed: 100 , description: "A Cheap and Good Guest Suite", bookable:"Rentable"
    },
    {
        name: 'Hotel Room 2', type:"Double Storey", img: 'assets/app/media/img/custom/guest-suites/1.jpg', area: '300 sq/m', allowed:80 , description: "A Cheap and Good Guest Suite", bookable:"Sellable"
    }
   ];

   buildingName = "ABC Building";

   owners = ["Jabe", "Chris" , "Jelly"];
   ownerDropdownModel;
   config = {
       displayKey: "description", //if objects array passed which key to be displayed defaults to description,
       search: true //enables the search plugin to search in the list
   };

   tenants = ["Jabe", "Chris" , "Jelly"];
   tenantsDropdownModel;

   changeHotelView() {
    this.isHotelGridView = !this.isHotelGridView;
    if (this.isHotelGridView) {
        this.hotelViewName = 'List View';
    }
    else {
        this.hotelViewName = 'Grid View';
    }
    this.addHotelForm = false;
}

addHotel(hotelName, img , hotelType, hotelCategory, hotelSubCategory, hotelCapacity , hotelDescription) {

    this.hotels.push({name: hotelName, img:img, type:hotelType, area: hotelCategory ,allowed: hotelCapacity , description:hotelDescription , bookable:this.bookType});
    this.isHotelGridView = !this.isHotelGridView;
    this.changeHotelView();
}

deleteHotel(id)
{
    this.hotels.splice(id,1);
}

onSearchClicked()
{
    this.searchField = !this.searchField;
}

}
