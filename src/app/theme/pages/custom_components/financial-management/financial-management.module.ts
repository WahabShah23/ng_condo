import { OpenDetailsService } from './financial-planning/openDetailsService.service';
import { RouterModule } from '@angular/router';
import { FinancialManagementBillingSubscriptionComponent } from './financial-management-billing-subscription/financial-management-billing-subscription.component';
import { FinancialManagementReminderComponent } from './financial-management-reminder/financial-management-reminder.component';
import { FinancialManagementBudgetComponent } from './financial-management-budget/financial-management-budget.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { FileUploadModule, SidebarModule } from 'primeng/primeng';
import { SelectDropDownModule } from 'ngx-select-dropdown'
import { LayoutModule } from '../../../layouts/layout.module';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';
import { FilterPipe } from "../../../../pipes/filter.pipe";
import { FinancialManagementRoutingModule } from "./financial-management.routing.module";
import { FinancialManagementDashboardComponent } from "./financial-management-dashboard/financial-management-dashboard.component";
import { FinancialManagementComponent } from "./financial-management.component";
import { FinancialManagementForecastComponent } from './financial-management-forecast/financial-management-forecast.component';
import { FinancialManagementTagsComponent } from './financial-management-tags/financial-management-tags.component';
import { FinancialManagementAccountsComponent } from './financial-management-accounts/financial-management-accounts.component';
import { FinancialManagementReportsComponent } from './financial-management-reports/financial-management-reports.component';
import { FinancialPlanningComponent } from "./financial-planning/financial-planning.component";
import { BillingAndSubscriptionFinancialPlanningComponent } from './financial-planning/billing-and-subscription-financial-planning/billing-and-subscription-financial-planning.component';
import { BillingFinancialPlanningComponent } from './financial-planning/billing-and-subscription-financial-planning/billing-financial-planning/billing-financial-planning.component';
import { SubscriptionsFinancialPlanningComponent } from './financial-planning/billing-and-subscription-financial-planning/subscriptions-financial-planning/subscriptions-financial-planning.component';
import { OpenDetailsDirective } from './financial-planning/open-details.directive';
import { FilterBillingAndSubscriptionPipe } from './financial-planning/billing-and-subscription-financial-planning/filter-billing-and-subscription.pipe';
import { DisplayPaymentMethodDirective } from './financial-planning/display-payment-method.directive';
import { BudgetFinancialPlanningComponent } from './financial-planning/budget-financial-planning/budget-financial-planning.component';
import { IncomeBudgetFinancialPlanningComponent } from './financial-planning/budget-financial-planning/income-budget-financial-planning/income-budget-financial-planning.component';
import { TotalDirective } from './financial-planning/budget-financial-planning/income-budget-financial-planning/directives/total.directive';
import { BudgetCategoriesDomManipulationService } from './financial-planning/budget-financial-planning/income-budget-financial-planning/budget-categories-dom-manipulation.service';


@NgModule({
    imports: [
        CommonModule, LayoutModule,
        FileUploadModule, SidebarModule, ReactiveFormsModule, SelectDropDownModule, FormsModule,
        AngularMultiSelectModule, FinancialManagementRoutingModule, RouterModule
    ], exports: [
    ], declarations: [
        FinancialManagementComponent,
        FinancialManagementDashboardComponent,
        FinancialManagementBudgetComponent,
        FinancialManagementForecastComponent,
        FinancialManagementReminderComponent,
        FinancialManagementBillingSubscriptionComponent,
        FinancialManagementTagsComponent,
        FinancialManagementAccountsComponent,
        FinancialManagementReportsComponent,
        FinancialPlanningComponent,
        BillingAndSubscriptionFinancialPlanningComponent,
        BillingFinancialPlanningComponent,
        SubscriptionsFinancialPlanningComponent,
        OpenDetailsDirective,
        FilterBillingAndSubscriptionPipe,
        DisplayPaymentMethodDirective,
        BudgetFinancialPlanningComponent,
        IncomeBudgetFinancialPlanningComponent,
        TotalDirective

    ],
    providers: [OpenDetailsService, BudgetCategoriesDomManipulationService]

})
export class FinancialManagementModule {
}
