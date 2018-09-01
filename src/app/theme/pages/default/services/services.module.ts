import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DragulaModule } from "ng2-dragula";

import { LayoutModule } from '../../../layouts/layout.module';
import { DefaultComponent } from '../default.component';
import { ServicesComponent } from "./services.component";
import { AgmCoreModule, AgmMap } from '@agm/core';
import { MapViewServicesComponent } from './mapview/mapview.component';
import { CheckoutBarComponent } from './mapview/checkout-bar/checkout-bar.component';
import { CheckoutCartComponent } from './checkout-cart/checkout-cart.component';
import { MapViewService } from './mapview/mapviewService.service';


const routes: Routes = [
    {
        'path': '',
        'component': DefaultComponent,
        'children': [
            {
                'path': '',
                'component': ServicesComponent,
            },
            {
                'path': 'mapView',
                'component': MapViewServicesComponent,
            },
            {
                'path': 'checkout-cart',
                'component': CheckoutCartComponent,
            },
        ],
    },
];

@NgModule({
    imports: [
        CommonModule, FormsModule, RouterModule.forChild(routes), LayoutModule, DragulaModule, 
        AgmCoreModule.forRoot({
            apiKey: "AIzaSyCQlMMVsJXt25cmmii1rx_Ghn0bjRRNdtc"
        }),
    ], exports: [
        RouterModule,
    ], declarations: [
        ServicesComponent,
        MapViewServicesComponent,
        CheckoutBarComponent,
        CheckoutCartComponent
    ],
    providers: [MapViewService]
})
export class ServicesModule {
}