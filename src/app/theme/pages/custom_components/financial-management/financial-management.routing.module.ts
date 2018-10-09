import { BudgetFinancialPlanningComponent } from './financial-planning/budget-financial-planning/budget-financial-planning.component';
import { IncomeBudgetFinancialPlanningComponent } from './financial-planning/budget-financial-planning/income-budget-financial-planning/income-budget-financial-planning.component';
import { SubscriptionsFinancialPlanningComponent } from './financial-planning/billing-and-subscription-financial-planning/subscriptions-financial-planning/subscriptions-financial-planning.component';
import { FinancialManagementAccountsComponent } from './financial-management-accounts/financial-management-accounts.component';
import { FinancialManagementTagsComponent } from './financial-management-tags/financial-management-tags.component';
import { FinancialManagementBillingSubscriptionComponent } from './financial-management-billing-subscription/financial-management-billing-subscription.component';
import { FinancialManagementReminderComponent } from './financial-management-reminder/financial-management-reminder.component';
import { FinancialManagementForecastComponent } from './financial-management-forecast/financial-management-forecast.component';
import { FinancialManagementBudgetComponent } from './financial-management-budget/financial-management-budget.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FinancialManagementComponent } from "./financial-management.component";
import { FinancialManagementDashboardComponent } from "./financial-management-dashboard/financial-management-dashboard.component";
import { FinancialManagementReportsComponent } from './financial-management-reports/financial-management-reports.component';
import { FinancialPlanningComponent } from "./financial-planning/financial-planning.component";
import { BillingAndSubscriptionFinancialPlanningComponent } from './financial-planning/billing-and-subscription-financial-planning/billing-and-subscription-financial-planning.component';
import { BillingFinancialPlanningComponent } from './financial-planning/billing-and-subscription-financial-planning/billing-financial-planning/billing-financial-planning.component';

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
            {
                'path': 'FinancialPlanning',
                'component': FinancialPlanningComponent
            },
            {
                'path': 'Budgets',
                'component': FinancialManagementBudgetComponent
            },
            {
                'path': 'Reports',
                'component': FinancialManagementReportsComponent
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
            },
            {
                'path': 'Tags/:name',
                'component': FinancialManagementTagsComponent
            },
            {
                'path': 'Accounts/:name',
                'component': FinancialManagementAccountsComponent
            }
        ]
    },
    {
        'path': 'FinancialPlanning/Billing-and-Subscription',
        'component': BillingAndSubscriptionFinancialPlanningComponent,
        'children': 
        [
            {
                'path': '',
                'redirectTo': 'billing'
            },
            {
                'path': 'billing',
                'component': BillingFinancialPlanningComponent
            },
            
            {
                'path': 'subscriptions',
                'component': SubscriptionsFinancialPlanningComponent
            }
        ]
    },
    {
    'path': 'FinancialPlanning/Budget',
    'component': BudgetFinancialPlanningComponent,
    'children': [
        {
            'path': '',
            'redirectTo':'income'
        },
        {
            'path': ':budgetcategory',
            'component': IncomeBudgetFinancialPlanningComponent
        }
        ]
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class FinancialManagementRoutingModule 
{ 
    
}
