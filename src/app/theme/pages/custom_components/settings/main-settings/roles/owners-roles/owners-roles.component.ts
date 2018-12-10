import { RolesService } from './../../../../../../../services/roles.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SelectDropDownComponent } from 'ngx-select-dropdown/dist/components';

@Component({
    selector: 'app-owners-roles',
    templateUrl: "./owners-roles.component.html",
    styleUrls: ["./owners-roles.component.css"]
})
export class OwnersRolesComponent implements OnInit {

    @ViewChild('companyNamesDropdown') companyNamesDropdown: SelectDropDownComponent;
    @ViewChild('buildingNamesDropdown') buildingNamesDropdown: SelectDropDownComponent;
    @ViewChild('setPasswordCheckbox') setPasswordCheckbox: HTMLInputElement;
    @ViewChild('firstName') firstNameInput: ElementRef;
    @ViewChild('lastName') lastNameInput: ElementRef;
    @ViewChild('isIndividualCheckbox') isIndividualCheckbox: ElementRef;

    isGroupSelect = false;
    isSectionSelect = false;
    inviteType = 'Individual';
    relationType = '';
    isIndividualSelect = false;

    isFloor = false;
    isCondo = false;
    isParking = false;
    isGuestSuite = false;
    isShop = false;
    isEdit = false;


    config =
        {
            displayKey: "description", //if objects array passed which key to be displayed defaults to description,
            search: true, //enables the search plugin to search in the list 
        };

    companies = ["Company A", "Company B", "Company C"];
    companiesDropdownModel;

    buildings = ["Building A", "Building B", "Building C"];
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
        name: "Building Support",
        date: "6/10/2017"
    }
        ,

    {
        name: "Condo Owners A",
        date: "6/10/2017"
    },

    {
        name: "Condo Tenants B",
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

    //Floor Configs

    floorItemList = [];
    floorSelectedItems = [];
    hierarchySettings = {};


    //Parking Configs
    parkingItemList = [];
    parkingSelectedItems = [];


    //Condo Configs
    condoItemList = [];
    condoSelectedItems = [];


    //Condo Guest 
    guestSuitesitemList = [];
    guestSuitesSelectedItems = [];



    //Shops Guest 
    shopsItemList = [];
    shopsItemSelectedItems = [];



    constructor(private roleService: RolesService, private router: Router, private route: ActivatedRoute) {

    }

    ngOnInit() {


        this.itemList = [
            { "id": 1, "itemName": "Floor", "category": "Building" },
            { "id": 2, "itemName": "Condo", "category": "Building" },
            { "id": 3, "itemName": "Parking", "category": "Building" },
            { "id": 4, "itemName": "Guest Suites", "category": "Building" },
            { "id": 5, "itemName": "Shop", "category": "Building" },

            { "id": 6, "itemName": "Inventory (10th Floor Noth East Corner)", "category": "Specialized Facility" },
            { "id": 8, "itemName": "Stocks (11th Floor Noth East Corner)", "category": "Specialized Facility" },
            { "id": 9, "itemName": "Gym (12th Floor Noth East Corner)", "category": "Specialized Facility" },
            { "id": 10, "itemName": "Party Rooms (12th Floor South East Corner)", "category": "Specialized Facility" },
            { "id": 11, "itemName": "Games (10th Floor Noth Wast Corner)", "category": "Specialized Facility" },

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


        //Floors Section
        this.floorItemList = [{ "id": 1, "itemName": "Floor 1" },
        { "id": 2, "itemName": "Floor 2" },
        { "id": 3, "itemName": "Floor 3" },
        { "id": 4, "itemName": "Floor 4" },
        { "id": 5, "itemName": "Floor 5" },
        { "id": 6, "itemName": "Floor 6" }
        ];


        this.floorSelectedItems = [];

        this.hierarchySettings = {
            singleSelection: false,
            text: "Select Fields",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            searchPlaceholderText: 'Search',
            enableSearchFilter: true,
            badgeShowLimit: 5
        };








        //Parking Section
        this.parkingItemList = [{ "id": 1, "itemName": "Parking Floor 1" },
        { "id": 2, "itemName": "Parking Floor 2" },
        { "id": 3, "itemName": "Parking Floor 3" },
        { "id": 4, "itemName": "Parking Floor 4" },
        { "id": 5, "itemName": "Parking Floor 5" },
        { "id": 6, "itemName": "Parking Floor 6" }
        ];


        this.parkingSelectedItems = [];


        //Parking Section
        this.condoItemList = [{ "id": 1, "itemName": "Condo 1" },
        { "id": 2, "itemName": "Condo 2" },
        { "id": 3, "itemName": "Condo 3" },
        { "id": 4, "itemName": "Condo 4" },
        { "id": 5, "itemName": "Condo 5" },
        { "id": 6, "itemName": "Condo 6" }
        ];


        this.condoSelectedItems = [];


        //Guest Suites Section
        this.guestSuitesitemList = [{ "id": 1, "itemName": "GS-1" },
        { "id": 2, "itemName": "GS-2" },
        { "id": 3, "itemName": "GS-3" },
        { "id": 4, "itemName": "GS-4" },
        { "id": 5, "itemName": "GS-5" },
        { "id": 6, "itemName": "GS-6" }
        ];


        this.guestSuitesSelectedItems = [];



        //Shops Section
        this.shopsItemList = [{ "id": 1, "itemName": "Shop 1" },
        { "id": 2, "itemName": "Shop 2" },
        { "id": 3, "itemName": "Shop 3" },
        { "id": 4, "itemName": "Shop 4" },
        { "id": 5, "itemName": "Shop 5" },
        { "id": 6, "itemName": "Shop 6" }
        ];


        this.shopsItemSelectedItems = [];




        //isEdit
        if (this.route.snapshot.params['id']) {
            this.isEdit = true;
            this.isSectionSelect = true;
            this.isGroupSelect = true;
            let role = this.roleService.getRolesbyId(this.route.snapshot.params['id']);
            this.firstNameInput.nativeElement.value = role.name;
            this.buildingDropdownModel = "Building ABC";
            this.selectedItems.push(this.itemList[0]);

            //this.buildingNamesDropdown.selectedItems = ["Building A"];

        }



    }



    onInviteSelect(inviteType: string) {
        if (inviteType == "Individual") {
            this.inviteType = 'Individual';
        }
        else if (inviteType == 'Company') {
            this.inviteType = 'Company';
        }
        else if (inviteType == 'Employee') {
            this.inviteType = 'Employe';
        }

    }

    openGroupSelectBar() {
        this.isGroupSelect = true;
    }



    backFromGroupSelect() {
        this.isGroupSelect = false;
        this.isSectionSelect = false;
    }

    backFromSectionSelect() {
        this.isSectionSelect = false;
    }





    onAddBuilding(building: string) {
        this.buildings.push(building);
        this.buildingNamesDropdown.availableItems.push(building);
    }


    onDeleteRole(i) {
        this.roles.splice(i, 1);
    }

    onAddRole(roleName: string) {
        this.roles.push({ name: roleName, date: "12/11/2018" });
    }

    onAddCompany(companyName) {
        this.companies.push(companyName);
        this.companyNamesDropdown.availableItems.push(companyName);
    }

    onAddMember(relation, firstName, lastName) {
        if (!this.isEdit) {
            this.roleService.addRole(this.companiesDropdownModel, relation, firstName + '' + lastName);
        }
        this.router.navigate(['/settings/roles']);
    }






    onItemSelect(item: { id: string, itemName: string, category: "Building" }) {
        if (item.itemName == "Floor") {
            this.isFloor = true;
        }
        else if (item.itemName == "Condo") {
            this.isCondo = true;
        }
        else if (item.itemName == "Parking") {
            this.isParking = true;
        }
        else if (item.itemName == "Guest Suites") {
            this.isGuestSuite = true;
        }
        else if (item.itemName == "Shop") {
            this.isShop = true;
        }
    }

    OnItemDeSelect(item: any) {
        if (item.itemName == "Floor") {
            this.isFloor = false;
        }
        else if (item.itemName == "Condo") {
            this.isCondo = false;
        }
        else if (item.itemName == "Parking") {
            this.isParking = false;
        }
        else if (item.itemName == "Guest Suites") {
            this.isGuestSuite = false;
        }
        else if (item.itemName == "Shop") {
            this.isShop = false;
        }
    }
    onSelectAll(items: any) {
        this.isFloor = true;
        this.isCondo = true;
        this.isParking = true;
        this.isGuestSuite = true;
        this.isShop = true;
    }
    onDeSelectAll(items: any) {
        this.isFloor = false;
        this.isCondo = false;
        this.isParking = false;
        this.isGuestSuite = false;
        this.isShop = false;
    }



    onChangeRelation(value) {
        this.relationType = value;
    }


    IndividualChanged() {
        if (this.isIndividualCheckbox.nativeElement.checked) {
            this.isIndividualSelect = true;
            this.isSectionSelect = false;
        }
        else {
            this.isIndividualSelect = false;
        }
    }

    selectionChanged(event, dropdown) {
        console.log(dropdown);
    }

    openSectionSelectBar() {
        this.isSectionSelect = true;
        this.isIndividualSelect = false;
    }
}
