import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shops',
  templateUrl: "./shops.component.html",
  styleUrls: ["./shops.component.css"]
})
export class ShopsComponent implements OnInit {

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
        name: "Shop 1", type:"Shopping Mall", img: 'assets/app/media/img/custom/guest-suites/1.jpg', area: '400 sq/m' , allowed: 100 , description: "A Cheap and Good Guest Suite", bookable:"Rentable"
    },
    {
        name: 'Shop 2', type:"Grocery", img: 'assets/app/media/img/custom/guest-suites/1.jpg', area: '300 sq/m', allowed:80 , description: "A Cheap and Good Guest Suite", bookable:"Sellable"
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

addSuite(guestSuiteName, img , guestType , guestSuiteCategory, guestSuiteSubCategory, guestSuiteCapacity , GuestSuiteDescription) {

    this.suites.push({name: guestSuiteName, type:guestType, img:img, area: guestSuiteCategory ,allowed: guestSuiteCapacity , description:GuestSuiteDescription , bookable:this.bookType});
    this.isSuiteGridView = !this.isSuiteGridView;
    this.changeSuiteView();
}

deleteGuestSuite(id)
{
    this.suites.splice(id,1);
}

onSearchClicked()
{
    this.searchField = !this.searchField;
}


}
