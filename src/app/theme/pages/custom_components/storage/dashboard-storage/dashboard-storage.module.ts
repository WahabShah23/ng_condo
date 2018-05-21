import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LayoutModule } from '../../../../layouts/layout.module';
import { StorageComponent } from "../storage.component";
import { DashboardStorageComponent } from "./dashboard-storage.component"


const routes: Routes = [
    {
        'path': '',
        'component': StorageComponent,
        'children': [
            {
                'path': '',
                'component': DashboardStorageComponent,
            },
        ],
    },
];

@NgModule({
    imports: [
        CommonModule, RouterModule.forChild(routes), LayoutModule
    ], exports: [
        RouterModule,
    ], declarations: [
        DashboardStorageComponent,
    ],

})
export class DashboardStorageModule {
}