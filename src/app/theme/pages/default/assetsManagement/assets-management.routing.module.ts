import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssetsManagementComponent } from "./assets-management.component";
import { AssetsManagementDashboardComponent } from "./assets-management-dashboard/assets-management-dashboard.component";
import { AssetsManagementFacilitiesComponent } from "./assets-management-facilities/assets-management-facilities.component";
import { AssetsManagementEquipmentComponent } from "./assets-management-equipment/assets-management-equipment.component";
import { AssetsManagementToolsComponent } from "./assets-management-tools/assets-management-tools.component";

const routes: Routes = [
    {
        'path': '',
        'component': AssetsManagementComponent,
        'children': [
            {
                'path': '',
                'component': AssetsManagementDashboardComponent
            },
            {
                'path': 'dashboard',
                'component': AssetsManagementDashboardComponent
            },
            {
                'path': 'facilities',
                'component': AssetsManagementFacilitiesComponent
            },
            {
                'path': 'equipment',
                'component': AssetsManagementEquipmentComponent
            },
            {
                'path': 'tools',
                'component': AssetsManagementToolsComponent
            }
        ]
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AssetsManagementRoutingModule { }
