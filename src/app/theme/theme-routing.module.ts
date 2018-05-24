import { NgModule } from '@angular/core';
import { ThemeComponent } from './theme.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/_guards/auth.guard';
import { WizardComponent } from "../components/wizard/wizard.component";

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
                "path": "global",
                "loadChildren": ".\/pages\/default\/global\/global.module#GlobalModule"
            },
            {
                "path": "customers",
                "loadChildren": ".\/pages\/default\/customers\/customers.module#CustomersModule"
            },
            {
                "path": "services",
                "loadChildren": ".\/pages\/default\/services\/services.module#ServicesModule"
            },

            {
                "path": "suppliers",
                "loadChildren": ".\/pages\/default\/suppliers\/suppliers.module#SuppliersModule"
            },
            {
                "path": "faq",
                "loadChildren": ".\/pages\/default\/snippets\/faq\/faq-faq-1\/faq-faq-1.module#FaqFaq1Module"
            },
            {
                "path": "404",
                "loadChildren": ".\/pages\/default\/not-found\/not-found.module#NotFoundModule"
            }

        ]
    },

    {
        "path": "",
        component: ThemeComponent,
        "canActivate": [AuthGuard],
        "children": [
            {
                "path": "connect\/support",
                "loadChildren": ".\/pages\/custom_components\/connect\/support\/support.module#SupportModule",
                'pathMatch': 'full'
            },
            {
                "path": "connect",
                "loadChildren": ".\/pages\/custom_components\/connect\/dashboard-connect\/dashboard-connect.module#DashboardConnectModule"
            }
        ]
    },


    {
        'path': '',
        'component': ThemeComponent,
        'canActivate': [AuthGuard],
        'children': [
            {
                'path': 'storage',
                'loadChildren': ".\/pages\/custom_components\/storage\/dashboard-storage\/dashboard-storage.module#DashboardStorageModule",
            },
            {
                'path': 'storage\/workspace',
                'loadChildren': ".\/pages\/custom_components\/storage\/workspace-storage\/workspace-storage.module#WorkspaceStorageModule",
                'pathMatch': 'full'
            }
        ],
    },
    {
        "path": "index",
        component: WizardComponent,
        "canActivate": [AuthGuard]
    },
    // {
    //     "path": "connect",
    //     // "loadChildren": ".\/pages\/default\/connect\/connect.module#ConnectModule"
    //     component: ConnectComponent,
    //     outlet: "connect-bar"
    //
    // },
    {
        'path': '**',
        'redirectTo': '404',
        'pathMatch': 'full',
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ThemeRoutingModule { }
