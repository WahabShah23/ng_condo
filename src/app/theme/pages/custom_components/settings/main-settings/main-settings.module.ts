import { OwnerRolesSettings } from './../owners-roles-settings/owners-roles-settings.component';
import { HotelsComponent } from './building-settings/hotels/hotels.component';
import { ShopsComponent } from './building-settings/shops/shops.component';
import { SettingsSpecializedComponent } from '../settings-specialized/settings-specialized.component';
import { InventorySettingsComponent } from './building-settings/apartment-settings/inventory-settings/inventory-settings.component';
import { SettingsCondosComponent } from '../settings-condos/settings-condos.component';
import { MainSettingsRouting } from './main-settings-routing.module';
import { SettingsBuildingsComponent } from '../settings-building/settings-building.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { FileUploadModule, SidebarModule } from 'primeng/primeng';
import { SelectDropDownModule } from 'ngx-select-dropdown'
import { LayoutModule } from '../../../../layouts/layout.module';
import { SettingsComponent } from '../settings/settings.component';
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
import { ItemGlobalSettingsComponent } from './item-global-settings/item-global-settings.component';
import { InventoryBuildingComponent } from './building-settings/specialized-rooms/inventory-building/inventory-building.component';
import { StockBuildingComponent } from './building-settings/specialized-rooms/stock-building/stock-building.component';
import { SpecializedRoomsComponent } from './building-settings/specialized-rooms/specialized-rooms.component';
import { ParkingComponent } from './building-settings/parking/parking.component';
import { GymComponent } from './building-settings/specialized-rooms/gym/gym.component';
import { PartyRoomsComponent } from './building-settings/specialized-rooms/party-rooms/party-rooms.component';
import { RulesGlobalSettingsComponent } from './rules-global-settings/rules-global-settings.component';
import { GuestSuitesComponent } from './building-settings/guest-suites/guest-suites.component';
import { AddRulesComponent } from './rules-global-settings/add-rules/add-rules.component';
import { GridViewRulesComponent } from './rules-global-settings/grid-view-rules/grid-view-rules.component';
import { ListViewRulesComponent } from './rules-global-settings/list-view-rules/list-view-rules.component';
import { RoomTypesComponent } from './building-settings/specialized-rooms/room-types/room-types.component';
import { RoomsComponent } from './building-settings/specialized-rooms/room-types/rooms/rooms.component';
import { GamesComponent } from './building-settings/specialized-rooms/games/games.component';
import { PoolComponent } from './building-settings/specialized-rooms/pool/pool.component';
import { MovieTheatreComponent } from './building-settings/specialized-rooms/movie-theatre/movie-theatre.component';
import { LoungeComponent } from './building-settings/specialized-rooms/lounge/lounge.component';
import { MeetingRoomsComponent } from './building-settings/meeting-rooms/meeting-rooms.component';
import { RolesComponent } from './roles/roles.component';
import { OwnersRolesComponent } from './roles/owners-roles/owners-roles.component';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';
import { FilterPipe } from "../../../../../pipes/filter.pipe";
import { TestDirective } from "../../../../../directives/test.directive";


@NgModule({
    imports: [
        CommonModule, LayoutModule,
        FileUploadModule, SidebarModule, ReactiveFormsModule, SelectDropDownModule, MainSettingsRouting, FormsModule,
        AngularMultiSelectModule
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
        ItemGlobalSettingsComponent,
        InventoryBuildingComponent,
        StockBuildingComponent,
        SpecializedRoomsComponent,
        SettingsSpecializedComponent,
        ParkingComponent,
        GymComponent,
        PartyRoomsComponent,
        RulesGlobalSettingsComponent,
        GuestSuitesComponent,
        AddRulesComponent,
        GridViewRulesComponent,
        ListViewRulesComponent,
        RoomTypesComponent,
        RoomsComponent,
        ShopsComponent,
        HotelsComponent,
        GamesComponent,
        PoolComponent,
        MovieTheatreComponent,
        LoungeComponent,
        MeetingRoomsComponent,
        RolesComponent,
        OwnerRolesSettings,
        OwnersRolesComponent,
        TestDirective,

    //  Pipes
        FilterPipe
    ],

})
export class MainSettingsModule {
}
