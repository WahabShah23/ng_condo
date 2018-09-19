import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { FileUploadModule, SidebarModule } from 'primeng/primeng';
import { SelectDropDownModule } from 'ngx-select-dropdown'
import { LayoutModule } from '../../../layouts/layout.module';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';
import { FilterPipe } from "../../../../pipes/filter.pipe";
import { AssetsManagementDashboardComponent } from "./assets-management-dashboard/assets-management-dashboard.component";
import { AssetsManagementEquipmentComponent } from "./assets-management-equipment/assets-management-equipment.component";
import { AssetsManagementFacilitiesComponent } from "./assets-management-facilities/assets-management-facilities.component";
import { AssetsManagementToolsComponent } from "./assets-management-tools/assets-management-tools.component";
import { AssetsManagementComponent } from "./assets-management.component";
import { AssetsManagementRoutingModule } from "./assets-management.routing.module";
import { AssignedAssetsComponent } from "./assigned-assets/assigned-assets.component";


@NgModule({
    imports: [
        CommonModule, LayoutModule,
        FileUploadModule, SidebarModule, ReactiveFormsModule, SelectDropDownModule, FormsModule,
        AngularMultiSelectModule, AssetsManagementRoutingModule
    ], exports: [
    ], declarations: [
        AssetsManagementComponent,
        AssetsManagementDashboardComponent,
        AssetsManagementEquipmentComponent,
        AssetsManagementFacilitiesComponent,
        AssetsManagementToolsComponent,
        AssignedAssetsComponent

        //  Pipes
        // FilterPipe
    ],

})
export class AssetsManagementModule {
}
