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
  addSuiteForm = false;
  isSuiteGridView = true;
  SuiteViewName = 'List View';
  bookType="Rentable";
  default_imgUrl = 'assets/app/media/img/custom/guest-suites/1.jpg';
  suites = [
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

   changeSuiteView() {
    this.isSuiteGridView = !this.isSuiteGridView;
    if (this.isSuiteGridView) {
        this.SuiteViewName = 'List View';
    }
    else {
        this.SuiteViewName = 'Grid View';
    }
    this.addSuiteForm = false;
}

addSuite(guestSuiteName, img , hotelType, guestSuiteCategory, guestSuiteSubCategory, guestSuiteCapacity , GuestSuiteDescription) {

    this.suites.push({name: guestSuiteName, img:img, type:hotelType, area: guestSuiteCategory ,allowed: guestSuiteCapacity , description:GuestSuiteDescription , bookable:this.bookType});
    this.isSuiteGridView = !this.isSuiteGridView;
    this.changeSuiteView();
}

deleteGuestSuite(id){
    console.log(id);
    this.suites.splice(id,1);
}

onSearchClicked()
{
    this.searchField = !this.searchField;
}

}
