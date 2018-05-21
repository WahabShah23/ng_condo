import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LayoutModule } from '../../../../layouts/layout.module';
import { ConnectComponent } from "../connect.component";
import { DashboardConnectComponent } from "./dashboard-connect.component"


const routes: Routes = [
    {
        'path': '',
        'component': ConnectComponent,
        'children': [
            {
                'path': '',
                'component': DashboardConnectComponent,
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
        DashboardConnectComponent,
    ],

})
export class DashboardConnectModule {
}