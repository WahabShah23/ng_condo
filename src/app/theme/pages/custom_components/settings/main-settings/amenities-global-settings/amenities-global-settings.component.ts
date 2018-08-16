import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Folder } from "../../../../../../models/Folder.model";
import { AmenitiesService } from "../../../../../../services/amenities.service";

@Component({
    selector: 'app-amenities-global-settings',
    templateUrl: './amenities-global-settings.html',
    styleUrls: ['./amenities-global-settings.css'],
    animations: [
        trigger('slideRightLeft', [
            state('show', style({
                transform: 'translateX(0)',
                // opacity: 1,
                // display: 'inline-block'
                width: '200px'
            })),
            state('hide', style({
                transform: 'translateX(0)',
                // opacity: 0,
                // display: 'none'
                width: '0px'
            })),
            transition('show => hide', animate('400ms ease-out')),
            transition('hide => show', animate('400ms ease-in'))
        ]),
    ]
})
export class AmenitiesGlobalSettingsComponent implements OnInit {

    addAmenityForm = false;
    isWalkIn = true;
    isAmenityGridView = true;
    AmenityViewName = 'List View';
    default_imgUrl = 'assets/app/media/img/custom/amenities/placeholder.png';

    selectedAmenities = [];

    Amenities;  // amenities property for amenity service implementation

    //declare a variable to hold class name:
    public display_searchBox = 'showSearch';

    //variable to hold boolean value for search field
    public isSearchBoxVisible = false;

    constructor(amenity_service: AmenitiesService) {
        // let amenity_service = new AmenitiesService();     //NOT GOOD APPROACH, IT MAKES IT TIGHTLY COUPLED TOO!
        this.Amenities = amenity_service.getAmenities();
    }

    searchBox: string = 'hide';

    toggleSearchBox() {
        // 1-line if statement that toggles the value:
        this.searchBox = this.searchBox === 'hide' ? 'show' : 'hide';
    }

    ngOnInit() {
    }

    changeAmenityView() {
        this.isAmenityGridView = !this.isAmenityGridView;
        if (this.isAmenityGridView) {
            this.AmenityViewName = 'List View';
        }
        else {
            this.AmenityViewName = 'Grid View';
        }
        this.addAmenityForm = false;
    }

    addAmenity(name: string, img: string, amenityFor: string, amenityType: string, desc?: string) {
        this.Amenities.push({ name: name, img: img, amenityfor: amenityFor, amenitytype: amenityType, desc: desc });
        this.isAmenityGridView = !this.isAmenityGridView;
        this.changeAmenityView();
    }

    // selectedItem(){
    //     this.selectedAmenities.push()
    // }

    deleteAmenity(id) {
        console.log(id);
        this.Amenities.splice(id, 1);
    }

    //function to change the class from style1 to style 2 when clicked
    toggle_class() {
        // if(this.display_searchBox=="showSearch"){
        //     this.display_searchBox='hideSearch';
        // }else{
        //     this.display_searchBox='showSearch';
        // }

        this.isSearchBoxVisible = !this.isSearchBoxVisible;
    }
}
