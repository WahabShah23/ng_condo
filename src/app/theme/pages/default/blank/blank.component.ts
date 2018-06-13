import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef, NgZone } from '@angular/core';
import { DemoService } from "../../../../services/demo.service";
import { MapsAPILoader } from '@agm/core';
import { } from 'googlemaps';
import { Observable } from 'rxjs/Rx';
import {FormControl} from "@angular/forms";

@Component({
    selector: 'app-blank',
    templateUrl: './blank.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class BlankComponent implements OnInit {
    public theData;
    title: string = 'Blank Page';
    @ViewChild('search') public searchElement: ElementRef;
    public searchControl: FormControl;

    lat: number = 51.678418;
    lng: number = 7.809007;

    constructor(private _demoService: DemoService, private mapsAPILoader: MapsAPILoader, private ngZone: NgZone) {
    }

    ngOnInit() {
        this.searchControl = new FormControl();
        this.mapsAPILoader.load().then(
            () => {
                var autocomplete = new google.maps.places.Autocomplete(this.searchElement.nativeElement, {types: ['address']});
                console.log(autocomplete);
                autocomplete.addListener("place_changed", () => {
                    this.ngZone.run(() => {
                        let place: google.maps.places.PlaceResult = autocomplete.getPlace();
                        if(place.geometry === undefined || place.geometry === null ){
                            return;
                        }
                    });
                });
            }
        );

        // this._demoService.getData().subscribe(
        //     data => { this.theData = data},
        //     err =>  console.error(err),
        //     () =>  console.log((this.theData['data']))
        // );

        // this._demoService.postData().subscribe(
        //     data => { this.theData = data },
        //     err => console.error(err),
        //     () => console.log((this.theData))
        // );

    }

}
