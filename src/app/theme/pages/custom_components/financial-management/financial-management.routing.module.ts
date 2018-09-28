import { FinancialManagementBillingSubscriptionComponent } from './financial-management-billing-subscription/financial-management-billing-subscription.component';
import { FinancialManagementReminderComponent } from './financial-management-reminder/financial-management-reminder.component';
import { FinancialManagementForecastComponent } from './financial-management-forecast/financial-management-forecast.component';
import { FinancialManagementBudgetComponent } from './financial-management-budget/financial-management-budget.component';
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
            },
            {
                'path': 'dashboard',
                'component': FinancialManagementDashboardComponent
            },
                'path': 'Budgets',
                'component': FinancialManagementBudgetComponent
            },
            {
                'path': 'Forecasts',
                'component': FinancialManagementForecastComponent
            },
            {
                'path': 'Reminders',
                'component': FinancialManagementReminderComponent
            },
            
            {
                'path': 'Billing-Subscription',
                'component': FinancialManagementBillingSubscriptionComponent
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
