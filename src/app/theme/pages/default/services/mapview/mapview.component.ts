import {
    Component,
    // ViewEncapsulation,
    ViewChild,
    AfterViewInit,
    NgZone
} from "@angular/core";
import { ScriptLoaderService } from "../../../../../_services/script-loader.service";
// import { } from "googlemaps";
import { AgmMap, MapsAPILoader } from "@agm/core";
import { MapViewService } from "./mapviewService.service";
@Component({
    templateUrl: "./mapview.component.html",
    styleUrls: ["./mapview.component.css"]
})
export class MapViewServicesComponent implements AfterViewInit {
    @ViewChild(AgmMap)
    agmMap: AgmMap;

    //Map buttons Start
    isMapDetail = false;
    //Map button End

    //side pop-up
    showServices = false;
    showOrderHistory = false;
    showInfo = false;
    showProducts = false;
    showServicesInfo = false;
    relatedServicesShow = false;
    categoryId: number = 0;
    checkCount: number = 0;
    compareItem: boolean = false;
    lang: any;
    lat: any;
    lati: number = 51.678418;
    lng: number = 7.809007;

    totalChecked = 0;

    constructor(
        private _script: ScriptLoaderService,
        private mapviewService: MapViewService // private mapsAPILoader: MapsAPILoader, // private ngZone: NgZone,
    ) { }

    ngOnInit() { }

    ngAfterViewInit() {
        this._script.loadScripts("app-services", [
            "//www.amcharts.com/lib/3/plugins/tools/polarScatter/polarScatter.min.js",
            "//www.amcharts.com/lib/3/plugins/export/export.min.js",
            "assets/app/js/services.js"
        ]);
    }

    adjustRadiusMap() {
        setTimeout(() => {
            this.agmMap.triggerResize();
        }, 2000);
    }

    onSearchChecked(event) {
        console.log();
        if (event.target.checked) {
            this.totalChecked++;

            if (event.target.id == 5) {
                this.categoryId++;
            }
            if (event.target.id == 4) {
                this.categoryId--;
            }
        }
        if (event.target.checked == false) {
            this.totalChecked--;
            if (event.target.id == 5) {
                this.categoryId--;
            }
            if (event.target.id == 4) {
                this.categoryId++;
            }
        }
        // if(event.target.id == 5) {
        //   this.categoryId++;
        //   console.log(this.categoryId);
        // }

        // if(event.target.id !== 5) {
        //   this.categoryId--;
        // }
        if (this.totalChecked > 1 && this.categoryId > 1) {
            this.compareItem = true;
            this.mapviewService.compareitem(this.compareItem);
        }

        if (this.totalChecked <= 1 || this.categoryId <= 1) {
            this.compareItem = false;
            this.mapviewService.compareitem(this.compareItem);
        }
    }

    comparePro: boolean = false;

    sideInfoPop(value: string) {
        if (value == "history") {
            this.showServices = false;
            this.showOrderHistory = true;
            this.showInfo = false;
            this.showProducts = false;
            this.showServicesInfo = false;
            this.relatedServicesShow = false;
        } else if (value == "service") {
            this.showServices = true;
            this.showOrderHistory = false;
            this.showInfo = false;
            this.showProducts = false;
            this.showServicesInfo = false;
            this.relatedServicesShow = false;
        } else if (value == "products") {
            this.showServices = false;
            this.showOrderHistory = false;
            this.showInfo = false;
            this.showProducts = true;
            this.showServicesInfo = false;
            this.relatedServicesShow = false;
        } else if (value == "serviceInfo") {
            this.showServices = false;
            this.showOrderHistory = false;
            this.showInfo = false;
            this.showProducts = false;
            this.showServicesInfo = true;
            this.relatedServicesShow = false;
        }
        else if (value == "relatedService") {
            this.showServices = false;
            this.showOrderHistory = false;
            this.showInfo = false;
            this.showProducts = false;
            this.showServicesInfo = false;
            this.relatedServicesShow = true;

        } else {
            this.showServices = false;
            this.showOrderHistory = false;
            this.showInfo = true;
            this.showProducts = false;
            this.relatedServicesShow = false;
        }
    }
    t = false;
    deselectAll: boolean = false;
    selectAll() {
        this.deselectAll = !this.deselectAll;
        this.t = this.deselectAll;
        //    console.log(this.t);

        if (this.t) {
            this.totalChecked = 3;
        } else {
            this.totalChecked = 0;
        }
    }

    checkProduct: boolean = true;
    checkServices: boolean = true;

    filterProducts() {
        this.checkProduct = !this.checkProduct;
        this.showServices = false;
        this.showOrderHistory = false;
        this.showInfo = false;
        this.showProducts = false;
        this.showServicesInfo = false;
    }

    filterServices() {
        this.checkServices = !this.checkServices;
        this.showServices = false;
        this.showOrderHistory = false;
        this.showInfo = false;
        this.showProducts = false;
        this.showServicesInfo = false;
    }
}
