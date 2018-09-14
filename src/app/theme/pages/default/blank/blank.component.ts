import {
    Component,
    OnInit,
    ViewEncapsulation,
    ViewChild,
    ElementRef,
    NgZone,
    Renderer2,
    AfterContentInit
} from '@angular/core';
import { DemoService } from "../../../../services/demo.service";
import { MenuItem } from "primeng/components/common/api";
import { MapsAPILoader } from '@agm/core';
import { } from 'googlemaps';
import { Observable } from 'rxjs/Rx';
import { FormControl } from "@angular/forms";
import { SelectItem } from "primeng/primeng";

@Component({
    selector: 'app-blank',
    templateUrl: './blank.component.html',
    styleUrls: ['./blank.component.css'],
    encapsulation: ViewEncapsulation.None,
})
export class BlankComponent implements OnInit, AfterContentInit {

    @ViewChild('abcd') private abcd: ElementRef;
    @ViewChild('hover') private hover: ElementRef;

    locationExist = false;
    public theData;
    title: string = 'Blank Page';
    @ViewChild('search') public searchElement: ElementRef;
    public searchControl: FormControl;

    lat: number = 51.678418;
    lng: number = 7.809007;

    visibleSidebar1;
    visibleSidebar2;
    visibleSidebar3;
    visibleSidebar4;
    visibleSidebar5;

    items: MenuItem[];

    cars: SelectItem[];

    selectedCars1: string[] = [];

    selectedCars2: string[] = [];

    constructor(private _demoService: DemoService, private mapsAPILoader: MapsAPILoader, private ngZone: NgZone, private renderer: Renderer2) {
    }

    ngOnInit() {

        this.cars = [
            { label: 'Audi', value: 'Audi' },
            { label: 'BMW', value: 'BMW' },
            { label: 'Fiat', value: 'Fiat' },
            { label: 'Ford', value: 'Ford' },
            { label: 'Honda', value: 'Honda' },
            { label: 'Jaguar', value: 'Jaguar' },
            { label: 'Mercedes', value: 'Mercedes' },
            { label: 'Renault', value: 'Renault' },
            { label: 'VW', value: 'VW' },
            { label: 'Volvo', value: 'Volvo' }
        ];



        this.searchControl = new FormControl();
        this.mapsAPILoader.load().then(
            () => {
                var autocomplete = new google.maps.places.Autocomplete(this.searchElement.nativeElement, { types: ['address'] });
                console.log(autocomplete);
                autocomplete.addListener("place_changed", () => {
                    this.ngZone.run(() => {
                        let place: google.maps.places.PlaceResult = autocomplete.getPlace();
                        if (place.geometry === undefined || place.geometry === null) {
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


        this.items = [
            {
                label: 'File',
                items: [{
                    label: 'New',
                    icon: 'fa fa-fw fa-plus',
                    items: [
                        { label: 'Project' },
                        { label: 'Other' },
                    ]
                },
                { label: 'Open' },
                { label: 'Quit' }
                ]
            },
            {
                label: 'Edit',
                icon: 'fa fa-fw fa-edit',
                items: [
                    { label: 'Undo', icon: 'fa fa-fw fa-mail-forward' },
                    { label: 'Redo', icon: 'fa fa-fw fa-mail-reply' }
                ]
            }
        ];

    }

    div = this.renderer.createElement('div');
    text = this.renderer.createText('This is div');

    onClick() {
        this.renderer.appendChild(this.div, this.text);
        this.renderer.appendChild(this.abcd.nativeElement, this.div);
        this.renderer.addClass(this.div, 'test');
    }

    onHover() {
        this.renderer.addClass(this.div, 'test');
        this.renderer.setStyle(this.hover.nativeElement, 'color', 'white');
        this.renderer.setStyle(this.hover.nativeElement, 'backgroundColor', 'green');
    }

    onLeave() {
        this.renderer.removeClass(this.div,'test');
        this.renderer.removeStyle(this.hover.nativeElement, 'color');
        this.renderer.removeStyle(this.hover.nativeElement, 'backgroundColor');
    }

    ngAfterContentInit () {
        // const startingStyles : AnimationStyles = {
        //     styles: [{}]
        // }
        //
        // const keyframes : AnimationKeyframe[] = [
        //     {
        //         offset: 0,
        //         styles: {
        //             styles: [{
        //                 transform: 'translateX(0px)',
        //             }]
        //         }
        //     },
        //     {
        //         offset: 1,
        //         styles: {
        //             styles: [{
        //                 transform: 'translateX(100px)',
        //             }]
        //         }
        //     }]
        //
        // const animation: AnimationPlayer = this.renderer.animate(this.div, startingStyles, keyframes, 3000, 1000, "ease");
        // animation.play();
        // animation.onDone(() => console.log('Animation complete'));
    }

}
