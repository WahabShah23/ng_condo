import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { DragulaModule } from "ng2-dragula";

import { LayoutModule } from '../../../layouts/layout.module';
import { DefaultComponent } from '../default.component';
// import { ServicesComponent } from "./services.component";
import { PeopleManagementComponent } from './peopleManagement.component';


const routes: Routes = [
    {
        'path': '',
        'component': DefaultComponent,
        'children': [
            {
                'path': '',
                'component': PeopleManagementComponent,
            },
        ],
    },
];

@NgModule({
    imports: [
        CommonModule, RouterModule.forChild(routes), LayoutModule, DragulaModule
    ], exports: [
        RouterModule,
    ], declarations: [
        PeopleManagementComponent,
    ],
})
export class PeopleManagementModule {
}