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


@NgModule({
    imports: [
        CommonModule, LayoutModule,
        FileUploadModule, SidebarModule, ReactiveFormsModule, SelectDropDownModule, FormsModule,
        AngularMultiSelectModule, FinancialManagementRoutingModule
    ], exports: [
    ], declarations: [
        FinancialManagementComponent,
        FinancialManagementDashboardComponent,
        FinancialManagementBudgetComponent,
        FinancialManagementForecastComponent,
        FinancialManagementReminderComponent,
        FinancialManagementBillingSubscriptionComponent

        //  Pipes
        // FilterPipe
    ],

})
export class FinancialManagementModule {
}
