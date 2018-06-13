import {
    AfterViewInit,
    Component,
    ViewEncapsulation,
    OnInit,
    ViewChild,
    ElementRef,
    NgZone, DoCheck, AfterContentChecked
} from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import { } from '@types/googlemaps';
import { Helpers } from "../../helpers";
import { ScriptLoaderService } from '../../_services/script-loader.service'
// import { FormControl, FormGroup } from '@angular/forms';



@Component({
    selector: 'app-wizard',
    templateUrl: './wizard.component.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./wizard.component.css']
})
export class WizardComponent implements OnInit, AfterViewInit, AfterContentChecked, DoCheck {

    // public searchControl: FormControl;
    locationExist = false;
    @ViewChild('search') public searchElementRef: ElementRef;
    @ViewChild('countrySearch') public searchElementRefCountry: ElementRef;
    @ViewChild('ownCountrySearch') public searchElementRefOwnCountry: ElementRef;
    
    ownCountrySearch
    corpPlaces: any;
    corpCity = '';
    corpCountry = '';
    corpCountryCode = '';
    corpMainCity = '';
    corpState = '';
    corpPostalCode = ''
    corpAddress1 = '';
    corpAddress2 = '';

    // Registered Company Country
    registeredCountryLocation = '';

    // Own Address
    ownCity = '';
    ownCountry = '';
    ownState = '';    
    ownPostalCode = '';


    my_Class;


    constructor(private _script: ScriptLoaderService, private mapsAPILoader: MapsAPILoader, private ngZone: NgZone) {
    }

    ngOnInit() {

        // this.searchControl = new FormControl();
        this.mapsAPILoader.load().then(() => {
            const autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
                types: ['address']
            });
            autocomplete.addListener('place_changed', () => {
                this.ngZone.run(() => {
                    const place: google.maps.places.PlaceResult = autocomplete.getPlace();
                    // console.log(place);


                    // for country
                    var address_components = autocomplete.getPlace().address_components;
                    // console.log(address_components);
                    for (let j = 0; j < address_components.length; j++) {
                        this.corpCountryCode = '';
                        // this.corpPostalCode = address_components.length;
                        // for country
                        if (address_components[j].types[0] == 'country') {
                            this.corpCountry = address_components[j].long_name;
                        }
                        // for postal code
                        if (address_components[j].types[0] == 'postal_code') {
                            this.corpCountryCode = address_components[j].long_name;
                        }
                    }

                    // for city
                    for (let ac = 0; ac < address_components.length; ac++) {

                        var component = address_components[ac];
                            // for city
                        if (component.types.includes('locality')) {
                            this.corpCity = component.long_name;
                        }
                        // for state
                        if (component.types.includes('administrative_area_level_1')) {
                            this.corpState = component.short_name;
                        }
                        // for street address
                        // console.log("In side for city");
                        if (component.types.includes('street_number')) {
                            this.corpAddress1 = component.long_name;
                        // console.log(this.corpAddress1);
                            
                        }
                        // for town Address
                        if (component.types.includes('route')) {
                            this.corpAddress2 = component.long_name;
                        // console.log( this.corpAddress2);
                    } };

                    // for address
                    // for (let ac = 0; ac < address_components.length; ac++) {

                    //     var component = address_components[ac];

                    //     if (component.types.includes('street_number')) {
                    //         this.corpAddress1 = component.long_name;
                    //     console.log(this.corpAddress1);
                            
                    //     }
                    //     if (component.types.includes('route')) {
                    //         this.corpAddress2 = component.long_name;
                    //     console.log( this.corpAddress2);
                            
                    //     }
                    // };

                    // For State/Province


                    // verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        // console.log('No Place Exist');
                        return;
                    }

                })
            })
        });



        // for City Only
        this.mapsAPILoader.load().then(() => {
            const autocomplete = new google.maps.places.Autocomplete(this.searchElementRefCountry.nativeElement, {
                types: ['address']
            });
            console.log('caled');
            autocomplete.addListener('place_changed', () => {
                this.ngZone.run(() => {
                    const place: google.maps.places.PlaceResult = autocomplete.getPlace();
                    // console.log(place);


                    // for country
                    var address_components = autocomplete.getPlace().address_components;
                    // console.log(address_components);
                    for (let j = 0; j < address_components.length; j++) {
                        
                        if (address_components[j].types[0] == 'country') {
                            this.registeredCountryLocation = address_components[j].long_name;
                        }
                    }


                    // verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        // console.log('No Place Exist');
                        return;
                    }

                })
            })
        });


        this.mapsAPILoader.load().then(() => {
            const autocomplete = new google.maps.places.Autocomplete(this.searchElementRefOwnCountry.nativeElement, {
                types: ['address']
            });
            // console.log('caled');
            autocomplete.addListener('place_changed', () => {
                this.ngZone.run(() => {
                    const place: google.maps.places.PlaceResult = autocomplete.getPlace();
                    console.log(place);


                    // for country
                    var address_components = autocomplete.getPlace().address_components;
                    // console.log(address_components);
                    for (let j = 0; j < address_components.length; j++) {

                        this.ownPostalCode = '';
                        if (address_components[j].types[0] == 'country') {
                            this.ownCountry = address_components[j].long_name;
                        }
                        // own City
                        if (address_components[j].types[0] == 'locality') {
                            this.ownCity = address_components[j].long_name;
                        }
                        if (address_components[j].types[0] == 'administrative_area_level_1') {
                            this.ownState = address_components[j].long_name;
                        }
                        if (address_components[j].types[0] == 'postal_code' ) {
                            this.ownPostalCode = address_components[j].long_name;
                        }
                    }


                    // verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        // console.log('No Place Exist');
                        return;
                    }

                })
            })
        });

    }


    ngDoCheck() {

    }

   ngAfterContentChecked(){

   }

    ngAfterViewInit() {
        this._script.loadScripts('app-wizard',
            ['assets/demo/default/custom/components/forms/wizard/wizard.js']);
    }
    
    toggle_class(){
        if(this.my_Class=="d-none"){
            this.my_Class='d-block';
        }else{
            this.my_Class='d-none';
        }
    }

}
