import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotificationsComponent } from "./notifications.component";
import { InboxComponent } from "./inbox/inbox.component";
import { SystemMessagesComponent } from "./system-messages/system-messages.component";
import { TrashComponent } from "./trash/trash.component";
import { SentComponent } from "./sent/sent.component";

const routes: Routes = [
    {
        'path': '',
        'component': NotificationsComponent,
        'children': [
            {
                'path': 'inbox',
                'component': InboxComponent
            },
            {
                'path': 'sent',
                'component': SentComponent
            },
            {
                'path': 'systemMessages',
                'component': SystemMessagesComponent
            },
            {
                'path': 'trash',
                'component': TrashComponent
            }
        ]
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class NotificationsRoutingModule { }
