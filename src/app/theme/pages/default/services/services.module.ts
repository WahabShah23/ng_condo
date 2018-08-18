import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DragulaModule } from "ng2-dragula";

import { LayoutModule } from '../../../layouts/layout.module';
import { DefaultComponent } from '../default.component';
import { ServicesComponent } from "./services.component";
import { AgmCoreModule, AgmMap } from '@agm/core';
import { MapViewServicesComponent } from './mapview/mapview.component';



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
        ],
    },
];

@NgModule({
    imports: [
        CommonModule, RouterModule.forChild(routes), LayoutModule, DragulaModule, 
        AgmCoreModule.forRoot({
            apiKey: "AIzaSyCQlMMVsJXt25cmmii1rx_Ghn0bjRRNdtc"
        }),
    ], exports: [
        RouterModule,
    ], declarations: [
        ServicesComponent,
        MapViewServicesComponent
    ],
})
export class ServicesModule {
}