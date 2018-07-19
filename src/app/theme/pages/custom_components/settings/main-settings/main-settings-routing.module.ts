import { PartyRoomsComponent } from './building-settings/specialized-rooms/party-rooms/party-rooms.component';
import { GymComponent } from './building-settings/specialized-rooms/gym/gym.component';
import { ParkingComponent } from './building-settings/parking/parking.component';
import { SpecializedRoomsComponent } from './building-settings/specialized-rooms/specialized-rooms.component';
import { StockBuildingComponent } from './building-settings/stock-building/stock-building.component';

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
import { InventoryBuildingComponent } from './building-settings/inventory-building/inventory-building.component';
import { InventoriesService } from '../../../../../services/inventories.service';
import { SettingsSpecializedComponent } from '../settings-specialized.component';

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
            {
                'path': 'inventory',
                'component': InventoryBuildingComponent,
            },
            {
                'path': 'stock',
                'component': StockBuildingComponent
            },
            {
                'path': 'parking',
                'component': ParkingComponent
            }
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
    {
        'path': 'buildings/:id/specialized-rooms',
        'component': SettingsSpecializedComponent,
        'children': [
            {
                'path': '',
                redirectTo: 'inventory'
            },
            {
                'path': 'inventory',
                'component': InventoryBuildingComponent
            },
            {
                'path': 'stock',
                'component': StockBuildingComponent
            },
            {
                'path': 'gym',
                'component': GymComponent
            },
            {
                'path': 'party-rooms',
                'component': PartyRoomsComponent
            }
        ]
    }

   
    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})

export class MainSettingsRouting { }