import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LayoutModule } from '../../../../layouts/layout.module';
import { SettingsComponent } from "../settings.component";
import { MainSettingsComponent } from "./main-settings.component"


const routes: Routes = [
    {
        'path': '',
        'component': SettingsComponent,
        'children': [
            {
                'path': '',
                'component': MainSettingsComponent,
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
        MainSettingsComponent,
    ],

})
export class MainSettingsModule {
}