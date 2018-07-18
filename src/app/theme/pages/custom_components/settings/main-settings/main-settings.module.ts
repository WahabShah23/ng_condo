import { SettingsSpecializedComponent } from './../settings-specialized.component';

import { InventorySettingsComponent } from './building-settings/apartment-settings/inventory-settings/inventory-settings.component';
import { SettingsCondosComponent } from './../settings-condos.component';
import { MainSettingsRouting } from './main-settings-routing.module';
import { SettingsBuildingsComponent } from './../settings-building.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";

import { FileUploadModule, SidebarModule } from 'primeng/primeng';
import { SelectDropDownModule } from 'ngx-select-dropdown'


import { LayoutModule } from '../../../../layouts/layout.module';
import { SettingsComponent } from "../settings.component";
import { MainSettingsComponent } from "./main-settings.component"
import { WizardBuildingComponent } from "../../../../../components/wizard-building/wizard-building.component";
import { AmenitiesGlobalSettingsComponent } from './amenities-global-settings/amenities-global-settings.component';
import { BillingServicesGlobalSettingsComponent } from './billing-services-global-settings/billing-services-global-settings.component';
import { BuildingSettingsComponent } from './building-settings/building-settings.component';
import { CommonServicesGlobalSettingsComponent } from './common-services-global-settings/common-services-global-settings.component';
import { FloorSettingsComponent } from './building-settings/floor-settings/floor-settings.component';
import { ApartmentSettingsComponent } from './building-settings/apartment-settings/apartment-settings.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { RoomSettingsComponent } from './building-settings/apartment-settings/room-settings/room-settings.component';
import { StructureSettingsComponent } from './building-settings/apartment-settings/structure-settings/structure-settings.component';
import { InventoryGlobalSettingsComponent } from './inventory-global-settings/inventory-global-settings.component';
import { InventoryBuildingComponent } from './building-settings/inventory-building/inventory-building.component';
import { StockBuildingComponent } from './building-settings/stock-building/stock-building.component';
import { SpecializedRoomsComponent } from './building-settings/specialized-rooms/specialized-rooms.component';





@NgModule({
    imports: [
        CommonModule, LayoutModule,
        FileUploadModule, SidebarModule, ReactiveFormsModule, SelectDropDownModule , MainSettingsRouting
    ], exports: [
    ], declarations: [
        MainSettingsComponent,
        WizardBuildingComponent,
        AmenitiesGlobalSettingsComponent,
        BillingServicesGlobalSettingsComponent,
        BuildingSettingsComponent,
        InventorySettingsComponent,
        CommonServicesGlobalSettingsComponent,
        FloorSettingsComponent,
        ApartmentSettingsComponent,
        SettingsBuildingsComponent,
        AccountSettingsComponent,
        RoomSettingsComponent,
        SettingsCondosComponent,
        StructureSettingsComponent,
        InventoryGlobalSettingsComponent,
        InventoryBuildingComponent,
        StockBuildingComponent,
        SpecializedRoomsComponent,
        SettingsSpecializedComponent
    ],

})
export class MainSettingsModule {
}
