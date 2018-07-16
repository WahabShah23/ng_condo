import { StructureSettingsComponent } from './building-settings/apartment-settings/structure-settings/structure-settings.component';

import { InventorySettingsComponent } from './building-settings/apartment-settings/inventory-settings/inventory-settings.component';
import { SettingsCondosComponent } from './../settings-condos.component';
import { RoomSettingsComponent } from './building-settings/apartment-settings/room-settings/room-settings.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsComponent } from './../settings.component';
import { AmenitiesGlobalSettingsComponent } from './amenities-global-settings/amenities-global-settings.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { SettingsBuildingsComponent } from './../settings-building.component';
import { FloorSettingsComponent } from './building-settings/floor-settings/floor-settings.component';
import { ApartmentSettingsComponent } from './building-settings/apartment-settings/apartment-settings.component';
import { BillingServicesGlobalSettingsComponent } from './billing-services-global-settings/billing-services-global-settings.component';
import { CommonServicesGlobalSettingsComponent } from './common-services-global-settings/common-services-global-settings.component';
import { BuildingSettingsComponent } from './building-settings/building-settings.component';
import { MainSettingsComponent } from './main-settings.component';
import { InventoryGlobalSettingsComponent } from "./inventory-global-settings/inventory-global-settings.component";

const routes: Routes = [
    {
        'path': '',
        'component': SettingsComponent,
        'children': [
            {
                'path': '',
                'component': MainSettingsComponent
            },
            {
                'path': 'buildings',
                'component': BuildingSettingsComponent
            },
            {
                'path': 'common-services-global',
                'component': CommonServicesGlobalSettingsComponent
            },
            {
                'path': 'services-global',
                'component': BillingServicesGlobalSettingsComponent
            },
            {
                'path': 'amenities',
                'component': AmenitiesGlobalSettingsComponent
            },
            {
                'path': 'accounts',
                'component': AccountSettingsComponent
            },
            {
                'path': 'inventory',
                'component': InventoryGlobalSettingsComponent
            }
        ],
    },
    {
        'path': 'buildings/:id',
        'component': SettingsBuildingsComponent,
        'children': [
            {
                'path': 'floors',
                'component': FloorSettingsComponent,
            },
            {
                'path': 'condos',
                'component': ApartmentSettingsComponent,
            },
        ]
    },
    {
        'path': 'buildings/:id/condos/:condoid',
        'component': SettingsCondosComponent,
        'children': [
            {
                'path': 'rooms',
                'component': RoomSettingsComponent,
            },
            {
                'path': 'inventory',
                'component': InventorySettingsComponent,
            },
            {
                'path': 'structure',
                'component': StructureSettingsComponent
            }
        ]
    },

   
    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})

export class MainSettingsRouting { }
