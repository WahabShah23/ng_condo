import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LayoutModule } from '../../../layouts/layout.module';
import { DefaultComponent } from '../default.component';
import { BlankComponent } from './blank.component';

import {
    AccordionModule,
    ButtonModule,
    CheckboxModule,
    ChipsModule,
    CodeHighlighterModule,
    ColorPickerModule,
    InputMaskModule,
    FieldsetModule,
    ContextMenuModule,
    GrowlModule,
    InputTextModule,
    MultiSelectModule,
    PanelModule,
    RadioButtonModule,
    SelectButtonModule,
    SplitButtonModule,
    TabViewModule,
    FileUploadModule,
    SidebarModule
} from 'primeng/primeng';


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
        }),

        // primeng modules
        ButtonModule,
        CheckboxModule,
        ChipsModule,
        CodeHighlighterModule,
        ColorPickerModule,
        InputMaskModule,
        GrowlModule,
        ContextMenuModule,
        InputTextModule,
        MultiSelectModule,
        RadioButtonModule,
        SelectButtonModule,
        SplitButtonModule,
        TabViewModule,
        AccordionModule,
        PanelModule,
        FieldsetModule,
        FileUploadModule,
        SidebarModule

    ], exports: [
        RouterModule,
    ], declarations: [
        BlankComponent,
    ],
})
export class BlankModule {
}
