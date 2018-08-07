import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LayoutModule } from '../../../../layouts/layout.module';
import { ConnectComponent } from "../connect.component";
import { SupportComponent } from "./support.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";


const routes: Routes = [
    {
        'path': '',
        'component': ConnectComponent,
        'children': [
            {
                'path': '',
                'component': SupportComponent,
            },
        ],
    },
];

@NgModule({
    imports: [
        CommonModule, RouterModule.forChild(routes), LayoutModule, FormsModule, ReactiveFormsModule
    ], exports: [
        RouterModule,
    ], declarations: [
        SupportComponent,
    ],

})
export class SupportModule {
}
