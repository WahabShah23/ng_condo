import { Component, OnInit } from '@angular/core';
import {Folder} from "../../../../../../models/Folder.model";
import { AmenitiesService } from "../../../../../../services/amenities.service";

@Component({
    selector: 'app-amenities-global-settings',
    templateUrl: './amenities-global-settings.html',
    styleUrls: ['./amenities-global-settings.css']
})
export class AmenitiesGlobalSettingsComponent implements OnInit {

    addAmenityForm = false;
    isWalkIn = true;
    isAmenityGridView = true;
    AmenityViewName = 'List View';
    default_imgUrl = 'assets/app/media/img/custom/amenities/placeholder.png';

    selectedAmenities=[];

    Amenities;  // amenities property for amenity service implementation

    constructor( amenity_service: AmenitiesService) {
        // let amenity_service = new AmenitiesService();     //NOT GOOD APPROACH, IT MAKES IT TIGHTLY COUPLED TOO!
        this.Amenities = amenity_service.getAmenities();
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
        this.Amenities.push({name: name, img:img, amenityfor: amenityFor, amenitytype: amenityType, desc: desc });
        this.isAmenityGridView = !this.isAmenityGridView;
        this.changeAmenityView();
    }

    // selectedItem(){
    //     this.selectedAmenities.push()
    // }

    deleteAmenity(id){
        console.log(id);
        this.Amenities.splice(id,1);
    }
}
