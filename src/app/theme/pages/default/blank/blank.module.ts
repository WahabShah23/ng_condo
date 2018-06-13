import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LayoutModule } from '../../../layouts/layout.module';
import { DefaultComponent } from '../default.component';
import { BlankComponent } from './blank.component';

const routes: Routes = [
    {
        'path': '',
        'component': DefaultComponent,
        'children': [
            {
                'path': '',
                'component': BlankComponent,
            },
        ],
    },
];

@NgModule({
    imports: [
        CommonModule, RouterModule.forChild(routes), LayoutModule,
        ReactiveFormsModule,
        FormsModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyB95P4UOlcThWmtfkx7g4rGmzmKtomZoAc',
            libraries: ['places']
        })
    ], exports: [
        RouterModule,
    ], declarations: [
        BlankComponent,
    ],
})
export class BlankModule {
}
