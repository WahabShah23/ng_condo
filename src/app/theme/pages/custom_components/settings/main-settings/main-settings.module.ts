import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from "@angular/forms";

import { FileUploadModule, SidebarModule } from 'primeng/primeng';

import { LayoutModule } from '../../../../layouts/layout.module';
import { SettingsComponent } from "../settings.component";
import { MainSettingsComponent } from "./main-settings.component"
import { WizardBuildingComponent } from "../../../../../components/wizard-building/wizard-building.component";
import { AmenitiesGlobalSettingsComponent } from './amenities-global-settings/amenities-global-settings.component';
import { BillingServicesGlobalSettingsComponent } from './billing-services-global-settings/billing-services-global-settings.component';
import { BuildingSettingsComponent } from './building-settings/building-settings.component';
import { CommonServicesGlobalSettingsComponent } from './common-services-global-settings/common-services-global-settings.component';



const routes: Routes = [
    {
        'path': '',
        'component': SettingsComponent,
        'children': [
            {
                'path': '',
                'component': MainSettingsComponent,
            },
        ],
    },
];

@NgModule({
    imports: [
        CommonModule, RouterModule.forChild(routes), LayoutModule,
        FileUploadModule, SidebarModule, ReactiveFormsModule
    ], exports: [
        RouterModule,
    ], declarations: [
        MainSettingsComponent,
        WizardBuildingComponent,
        AmenitiesGlobalSettingsComponent,
        BillingServicesGlobalSettingsComponent,
        BuildingSettingsComponent,
        CommonServicesGlobalSettingsComponent
    ],

})
export class MainSettingsModule {
}
