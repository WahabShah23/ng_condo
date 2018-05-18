import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout/layout.component';

import { HeaderNavComponent } from './header-nav/header-nav.component';
import { DefaultComponent } from '../pages/default/default.component';
import { AsideNavComponent } from './aside-nav/aside-nav.component';
import { FooterComponent } from './footer/footer.component';
import { QuickSidebarComponent } from './quick-sidebar/quick-sidebar.component';
import { ScrollTopComponent } from './scroll-top/scroll-top.component';
import { TooltipsComponent } from './tooltips/tooltips.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HrefPreventDefaultDirective } from '../../_directives/href-prevent-default.directive';
import { UnwrapTagDirective } from '../../_directives/unwrap-tag.directive';
import { StorageNavComponent } from './storage-nav/storage-nav.component';
import { GlobalNavComponent } from './global-nav/global-nav.component';
import { AsideNavConnectComponent } from './aside-nav-connect/aside-nav-connect.component';
import { ConnectComponent } from "../pages/custom_components/connect/connect.component";

@NgModule({
    declarations: [
        LayoutComponent,

        HeaderNavComponent,
        DefaultComponent,
        ConnectComponent,
        AsideNavComponent,
        AsideNavConnectComponent,
        FooterComponent,
        QuickSidebarComponent,
        ScrollTopComponent,
        TooltipsComponent,
        HrefPreventDefaultDirective,
        UnwrapTagDirective,
        StorageNavComponent,
        GlobalNavComponent
    ],
    exports: [
        LayoutComponent,

        HeaderNavComponent,
        DefaultComponent,
        ConnectComponent,
        AsideNavComponent,
        AsideNavConnectComponent,
        FooterComponent,
        QuickSidebarComponent,
        ScrollTopComponent,
        TooltipsComponent,
        HrefPreventDefaultDirective,
    ],
    imports: [
        CommonModule,
        RouterModule,
    ]
})
export class LayoutModule {
}