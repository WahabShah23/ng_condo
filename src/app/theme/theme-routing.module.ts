import { NgModule } from '@angular/core';
import { ThemeComponent } from './theme.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/_guards/auth.guard';
import {WizardComponent} from "../components/wizard/wizard.component";

const routes: Routes = [
    {
        "path": "",
        component: ThemeComponent,
        "canActivate": [AuthGuard],
        "children": [
            // {
            //     "path": "angular\/ng-bootstrap",
            //     "loadChildren": ".\/pages\/default\/angular\/ng-bootstrap\/ng-bootstrap.module#NgBootstrapModule"
            // },
            // {
            //     "path": "angular\/primeng",
            //     "loadChildren": ".\/pages\/default\/angular\/primeng\/primeng.module#PrimengModule"
            // },
            {
                "path": "blank",
                "loadChildren": ".\/pages\/default\/blank\/blank.module#BlankModule"
            },
            {
                 "path": "dashboard",
                 "loadChildren": ".\/pages\/default\/index\/index.module#IndexModule"
            },
            {
                "path": "customers",
                "loadChildren": ".\/pages\/default\/customers\/customers.module#CustomersModule"
                // "component": CustomersComponent
            },
            {
                "path": "services",
                "loadChildren": ".\/pages\/default\/services\/services.module#ServicesModule"
            }
        ]
    },
    // {
    //     'path': 'dashboard',
    //     'component': ThemeComponent,
    //     'canActivate': [AuthGuard],
    //     'children': [
    //         {
    //             'path': 'dashboard',
    //             'loadChildren': '.\/pages\/default\/blank\/blank.module#BlankModule',
    //         },
    //         {
    //             'path': '',
    //             'redirectTo': 'index',
    //             'pathMatch': 'full',
    //         },
    //     ],
    // },
    {
        "path": "index",
        component: WizardComponent,
        "canActivate": [AuthGuard]
    }
    // {
    //     'path': '**',
    //     'redirectTo': 'index',
    //     'pathMatch': 'full',
    // }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ThemeRoutingModule { }