import { AssetsToolsComponent } from './assets-settings/assets-tools/assets-tools.component';
import { AssetsFacilitiesComponent } from './assets-settings/assets-facilities/assets-facilities.component';
import { SettingsAssetsComponent } from './../settings-assets/settings-assets.component';
import { AssetsSettingsComponent } from './assets-settings/assets-settings.component';
import { OwnerRolesSettings } from './../owners-roles-settings/owners-roles-settings.component';
import { OwnersRolesComponent } from './roles/owners-roles/owners-roles.component';
import { RolesComponent } from './roles/roles.component';
import { MeetingRoomsComponent } from './building-settings/meeting-rooms/meeting-rooms.component';
import { LoungeComponent } from './building-settings/specialized-rooms/lounge/lounge.component';
import { MovieTheatreComponent } from './building-settings/specialized-rooms/movie-theatre/movie-theatre.component';
import { PoolComponent } from './building-settings/specialized-rooms/pool/pool.component';
import { GamesComponent } from './building-settings/specialized-rooms/games/games.component';
import { HotelsComponent } from './building-settings/hotels/hotels.component';
import { ShopsComponent } from './building-settings/shops/shops.component';
import { RoomsComponent } from './building-settings/specialized-rooms/room-types/rooms/rooms.component';
import { RoomTypesComponent } from './building-settings/specialized-rooms/room-types/room-types.component';
import { PartyRoomsComponent } from './building-settings/specialized-rooms/party-rooms/party-rooms.component';
import { GymComponent } from './building-settings/specialized-rooms/gym/gym.component';
import { ParkingComponent } from './building-settings/parking/parking.component';
import { SpecializedRoomsComponent } from './building-settings/specialized-rooms/specialized-rooms.component';
import { StockBuildingComponent } from './building-settings/specialized-rooms/stock-building/stock-building.component';

import { StructureSettingsComponent } from './building-settings/apartment-settings/structure-settings/structure-settings.component';

import { InventorySettingsComponent } from './building-settings/apartment-settings/inventory-settings/inventory-settings.component';

import { SettingsCondosComponent } from '../settings-condos/settings-condos.component';
import { RoomSettingsComponent } from './building-settings/apartment-settings/room-settings/room-settings.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsComponent } from '../settings/settings.component';
import { AmenitiesGlobalSettingsComponent } from './amenities-global-settings/amenities-global-settings.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { SettingsBuildingsComponent } from '../settings-building/settings-building.component';
import { FloorSettingsComponent } from './building-settings/floor-settings/floor-settings.component';
import { ApartmentSettingsComponent } from './building-settings/apartment-settings/apartment-settings.component';
import { BillingServicesGlobalSettingsComponent } from './billing-services-global-settings/billing-services-global-settings.component';
import { CommonServicesGlobalSettingsComponent } from './common-services-global-settings/common-services-global-settings.component';
import { BuildingSettingsComponent } from './building-settings/building-settings.component';
import { MainSettingsComponent } from './main-settings.component';
import { ItemGlobalSettingsComponent } from "./item-global-settings/item-global-settings.component";
import { InventoryBuildingComponent } from './building-settings/specialized-rooms/inventory-building/inventory-building.component';
import { InventoriesService } from '../../../../../services/inventories.service';
import { SettingsSpecializedComponent } from '../settings-specialized/settings-specialized.component';
import { RulesGlobalSettingsComponent } from "./rules-global-settings/rules-global-settings.component";
import { GuestSuitesComponent } from './building-settings/guest-suites/guest-suites.component';
import { AddRulesComponent } from "./rules-global-settings/add-rules/add-rules.component";
import { ListViewRulesComponent } from "./rules-global-settings/list-view-rules/list-view-rules.component";
import { GridViewRulesComponent } from "./rules-global-settings/grid-view-rules/grid-view-rules.component";
import { AssetsEquipmentsComponent } from './assets-settings/assets-equipments/assets-equipments.component';
import { FinancialSettingsGlobalComponent } from "./financial-settings-global/financial-settings-global.component";
import { FinancialFiatWalletComponent } from "./financial-settings-global/financial-fiat-wallet/financial-fiat-wallet.component";
import { FinancialDigitalWalletComponent } from "./financial-settings-global/financial-digital-wallet/financial-digital-wallet.component";

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
                'path': 'item',
                'component': ItemGlobalSettingsComponent
            },
            {
                'path': 'rules',
                'component': RulesGlobalSettingsComponent,
                'children': [
                    {
                        'path': '',
                        'component': GridViewRulesComponent
                    },
                    {
                        'path': 'grid',
                        'component': GridViewRulesComponent
                    },
                    {
                        'path': 'list',
                        'component': ListViewRulesComponent
                    },
                    {
                        'path': 'add',
                        'component': AddRulesComponent
                    }
                ]
            },
            //Roles
            {
                'path': 'roles',
                'component': RolesComponent
            },

        ],
    },

    {
        'path': 'financial-settings-global',
        'component': FinancialSettingsGlobalComponent,
        'children': [
            {
                'path': '',
                'component': FinancialFiatWalletComponent
            },
            {
                'path': 'fiat-wallet',
                'component': FinancialFiatWalletComponent
            },
            {
                'path': 'digital-wallet',
                'component': FinancialDigitalWalletComponent
            }
        ]
    },

    {
        'path': 'assets',
        'component': SettingsAssetsComponent,
        'children': [
            {
                'path': '',
                'redirectTo': 'dashboard'
            },
            {
                'path': 'dashboard',
                'component': AssetsSettingsComponent
            },
            {
                'path': 'facilities',
                'component': AssetsFacilitiesComponent
            },
            {
                'path': 'equipments',
                'component': AssetsEquipmentsComponent
            },
            {
                'path': 'tools',
                'component': AssetsToolsComponent
            }

        ]
    },
    {
        'path': 'roles/invite',
        'component': OwnerRolesSettings,
        'children': [
            {
                'path': '',
                'component': OwnersRolesComponent
            },
            {
                'path': ':id',
                'component': OwnersRolesComponent
            }
        ]
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
            },
            {
                'path': 'guest-suites',
                'component': GuestSuitesComponent
            },
            {
                'path': 'shops',
                'component': ShopsComponent
            },
            {
                'path': 'hotels',
                'component': HotelsComponent
            },
            {
                'path': 'meeting-rooms',
                'component': MeetingRoomsComponent
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
        'path': 'buildings/:id/specialized-facility',
        'component': SettingsSpecializedComponent,
        'children': [
            {
                'path': '',
                'component': RoomTypesComponent

            }
        ]
    },
    {
        'path': 'buildings/:id/specialized-facility/:id',
        'component': SettingsSpecializedComponent,
        'children': [
            {
                'path': '',
                'component': RoomsComponent

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
            },
            {
                'path': 'games',
                'component': GamesComponent
            },
            {
                'path': 'pools',
                'component': PoolComponent
            },
            {
                'path': 'movie-theatre',
                'component': MovieTheatreComponent
            },
            {
                'path': 'lounge',
                'component': LoungeComponent
            }

        ]
    }



];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class MainSettingsRouting { }
