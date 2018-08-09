import { Router } from '@angular/router';
import { RolesService } from './../../../../../../../auth/_services/roles.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { SelectDropDownComponent } from 'ngx-select-dropdown/dist/components';

@Component({
  selector: 'app-owners-roles',
  templateUrl: "./owners-roles.component.html",
  styleUrls: ["./owners-roles.component.css"]
})
export class OwnersRolesComponent implements OnInit {

  @ViewChild('companyNamesDropdown')  companyNamesDropdown: SelectDropDownComponent;
  @ViewChild('buildingNamesDropdown')  buildingNamesDropdown: SelectDropDownComponent;
  @ViewChild('setPasswordCheckbox') setPasswordCheckbox : HTMLInputElement;

  isGroupSelect = false;
  isSectionSelect = false;
  isIndividual = true;
  
  config = {
    displayKey: "description", //if objects array passed which key to be displayed defaults to description,
    search: true //enables the search plugin to search in the list
   };

   companies = ["Company A", "Company B" , "Company C"];
   companiesDropdownModel;

   buildings = ["Building A", "Building B" , "Building C"];
   buildingDropdownModel;

   roles = [{
     name: "Building Owners",
     date: "6/10/2017"
   },
  
   {
    name: "Building Management",
    date: "6/10/2017"
  },

  {
    name: "Building Secutiy",
    date: "6/10/2017"
  },

  {
    name: "Building Maintenance",
    date: "6/10/2017"
  },

  {
    name: "Building Support",
    date: "6/10/2017"
  }

];

isAddRoleFormDisplay = false;


itemList = [];
selectedItems = [];
settings = {};



  constructor(private roleService: RolesService ,private router: Router) 
  {

  }

  ngOnInit() 
  {
    this.itemList = [
    
      { "id": 6, "itemName": "Inventory (10th Floor Noth East Corner)", "category": "Specialized Facility" },
      { "id": 8, "itemName": "Stocks (11th Floor Noth East Corner)", "category": "Specialized Facility" },
      { "id": 9, "itemName": "Gym (12th Floor Noth East Corner)", "category": "Specialized Facility" },
      { "id": 10, "itemName": "Party Rooms (12th Floor South East Corner)", "category": "Specialized Facility" },
      { "id": 11, "itemName": "Games (10th Floor Noth Wast Corner)", "category": "Specialized Facility" },

      { "id": 12, "itemName": "Floor 1", "category": "Floor" },
      { "id": 13, "itemName": "Floor 2", "category": "Floor" },
      { "id": 14, "itemName": "Floor 3", "category": "Floor" },
      { "id": 15, "itemName": "Floor 4", "category": "Floor" },
      { "id": 16, "itemName": "Floor 5", "category": "Floor" },
      { "id": 17, "itemName": "Floor 6", "category": "Floor" },

      { "id": 18, "itemName": "Condo 1-A", "category": "Condo" },
      { "id": 19, "itemName": "Condo 1-B", "category": "Condo" },
      { "id": 20, "itemName": "Condo 1-C", "category": "Condo" },
      { "id": 21, "itemName": "Condo 1-D", "category": "Condo" },
      { "id": 22, "itemName": "Condo 1-E", "category": "Condo" },

      { "id": 23, "itemName": "Parking Floor 1", "category": "Parking" },
      { "id": 24, "itemName": "Parking Floor 2", "category": "Parking" },
      { "id": 25, "itemName": "Parking Floor 3", "category": "Parking" },
      { "id": 26, "itemName": "Parking Floor 4", "category": "Parking" },
      { "id": 27, "itemName": "Parking Floor 5", "category": "Parking" },

      { "id": 28, "itemName": "GS-1", "category": "Guest Suites" },
      { "id": 29, "itemName": "GS-2", "category": "Guest Suites" },
      { "id": 30, "itemName": "GS-3", "category": "Guest Suites" },
      { "id": 31, "itemName": "GS-4", "category": "Guest Suites" },
      { "id": 32, "itemName": "GS-5", "category": "Guest Suites" },


      { "id": 33, "itemName": "Shop 1", "category": "Shops" },
      { "id": 34, "itemName": "Shop 2", "category": "Shops" },
      { "id": 35, "itemName": "Shop 3", "category": "Shops" },
      { "id": 36, "itemName": "Shop 4", "category": "Shops" },
      { "id": 37, "itemName": "Shop 5", "category": "Shops" },
      { "id": 38, "itemName": "Shop 6", "category": "Shops" }


    ];

    this.selectedItems = [];
    
      this.settings = {
      singleSelection: false,
      text: "Select Fields",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      searchPlaceholderText: 'Search Fields',
      enableSearchFilter: true,
      badgeShowLimit: 5,
      groupBy: "category"
    };          
  }

  onInviteSelect(inviteType: string)
  {
    if(inviteType=="individual")
    {
      this.isIndividual = true;
    }
    else
    {
      this.isIndividual = false;
    }
    
  }

  openGroupSelectBar()
  {
    this.isGroupSelect = true;
  }


  openSectionSelectBar()
  {
    this.isSectionSelect = true;
  }

  backFromGroupSelect()
  {
    this.isGroupSelect = false;
    this.isSectionSelect = false;
  }

  backFromSectionSelect()
  {
    this.isSectionSelect = false;
  }





  onAddBuilding(building: string)
  {
    this.buildings.push(building);
    this.buildingNamesDropdown.availableItems.push(building);
  }


  onDeleteRole(i)
  {
    this.roles.splice(i,1);
  }

  onAddRole(roleName: string)
  {
    this.roles.push({name: roleName , date: "12/11/2018"});
  }

  onAddCompany(companyName)
  {
    this.companies.push(companyName);
    this.companyNamesDropdown.availableItems.push(companyName);
  }

  onAddMember(relation , firstName , lastName)
  {
    this.roleService.addRole(this.companiesDropdownModel , relation , firstName+ lastName);
    this.router.navigate(['/settings/roles']);
  }






  onItemSelect(item: any) {
    console.log(item);
    console.log(this.selectedItems);
  }
  OnItemDeSelect(item: any) {
    console.log(item);
    console.log(this.selectedItems);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
  onDeSelectAll(items: any) {
    console.log(items);
  }
}
