import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FinancialManagementComponent } from "./financial-management.component";
import { FinancialManagementDashboardComponent } from "./financial-management-dashboard/financial-management-dashboard.component";

const routes: Routes = [
    {
        'path': '',
        'component': FinancialManagementComponent,
        'children': [
            {
                'path': '',
                'component': FinancialManagementDashboardComponent
            }
            // {
            //     'path': 'dashboard',
            //     'component': AssetsManagementDashboardComponent
            // },
            // {
            //     'path': 'facilities',
            //     'component': AssetsManagementFacilitiesComponent
            // },
            // {
            //     'path': 'equipment',
            //     'component': AssetsManagementEquipmentComponent
            // },
            // {
            //     'path': 'tools',
            //     'component': AssetsManagementToolsComponent
            // },
            // {
            //     'path': 'Assigned-Assets',
            //     'component': AssignedAssetsComponent
            // }
        ]
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class FinancialManagementRoutingModule { }
