import { Component, OnInit } from '@angular/core';

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

    Amenities=[
        {
            name: 'Gym', img: 'assets/app/media/img/custom/amenities/gym.jpg', amenityfor: 'Building', amenitytype: 'Gymnasium', desc: 'desc'
        },
        {
            name: 'Laundry', img: 'assets/app/media/img/custom/amenities/laundry.jpg', amenityfor: 'Building', amenitytype: 'Laundry', desc: 'desc'
        },
        {
            name: 'Laundry', img: 'assets/app/media/img/custom/amenities/laundry.jpg', amenityfor: 'Floor', amenitytype: 'Laundry', desc: 'desc'
        },
        {
            name: 'Parking', img: 'assets/app/media/img/custom/amenities/parking.jpg', amenityfor: 'Building', amenitytype: 'Parking Lot', desc: 'desc'
        },
        {
            name: 'Pool', img: 'assets/app/media/img/custom/amenities/pool.jpg', amenityfor: 'Building', amenitytype: 'Swimming', desc: 'desc'
        },
        {
            name: 'Party', img: 'assets/app/media/img/custom/amenities/party.jpg', amenityfor: 'Building', amenitytype: 'Party Room', desc: 'desc'
        },
        {
            name: 'Terrace', img: 'assets/app/media/img/custom/amenities/terrace.jpg', amenityfor: 'Building', amenitytype: 'Rooftop Terrace', desc: 'desc'
        },
        {
            name: 'Guest Rooms', img: 'assets/app/media/img/custom/amenities/guest.jpg', amenityfor: 'Building', amenitytype: 'Guest Suites', desc: 'desc'
        },
        {
            name: 'Library East Side', img: 'assets/app/media/img/custom/amenities/lib.jpg', amenityfor: 'Building', amenitytype: 'Library', desc: 'desc'
        },
        {
            name: 'Biz Center', img: 'assets/app/media/img/custom/amenities/bizCenter.jpg', amenityfor: 'Building', amenitytype: 'Business Center', desc: 'desc'
        },

    ];

    constructor() { }

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

}
