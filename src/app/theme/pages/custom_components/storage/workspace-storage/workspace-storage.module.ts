import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { LayoutModule } from '../../../../layouts/layout.module';
import { StorageComponent } from "../storage.component";
import { WorkspaceStorageComponent } from "./workspace-storage.component";


const routes: Routes = [
    {
        'path': '',
        'component': StorageComponent,
        'children': [
            {
                'path': '',
                'component': WorkspaceStorageComponent,
            },
        ],
    },
];

@NgModule({
    imports: [
        CommonModule, RouterModule.forChild(routes), LayoutModule,
        FormsModule
    ], exports: [
        RouterModule,
    ], declarations: [
        WorkspaceStorageComponent,
    ],

})
export class WorkspaceStorageModule {
}
