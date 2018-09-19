import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { FileUploadModule, SidebarModule } from 'primeng/primeng';
import { SelectDropDownModule } from 'ngx-select-dropdown'
import { LayoutModule } from '../../../layouts/layout.module';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';
import { FilterPipe } from "../../../../pipes/filter.pipe";
import { NotificationsRoutingModule } from "./notifications.routing.module";
import { InboxComponent } from "./inbox/inbox.component";
import { SentComponent } from "./sent/sent.component";
import { SystemMessagesComponent } from "./system-messages/system-messages.component";
import { TrashComponent } from "./trash/trash.component";
import { NotificationsComponent } from "./notifications.component";



@NgModule({
    imports: [
        CommonModule, LayoutModule,
        FileUploadModule, SidebarModule, ReactiveFormsModule, SelectDropDownModule, FormsModule,
        AngularMultiSelectModule, NotificationsRoutingModule
    ], exports: [
    ], declarations: [
        NotificationsComponent,
        InboxComponent,
        SentComponent,
        SystemMessagesComponent,
        TrashComponent

        //  Pipes
        // FilterPipe
    ],

})
export class NotificationsModule {
}
