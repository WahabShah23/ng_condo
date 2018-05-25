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
import { AsideNavStorageComponent } from './aside-nav-storage/aside-nav-storage.component';
import { StorageComponent } from "../pages/custom_components/storage/storage.component";
import { CustomRightSidebarComponent } from './custom-right-sidebar/custom-right-sidebar.component';

@NgModule({
    declarations: [
        LayoutComponent,

        HeaderNavComponent,
        DefaultComponent,
        ConnectComponent,
        StorageComponent,
        AsideNavComponent,
        AsideNavConnectComponent,
        AsideNavStorageComponent,
        FooterComponent,
        QuickSidebarComponent,
        ScrollTopComponent,
        TooltipsComponent,
        HrefPreventDefaultDirective,
        UnwrapTagDirective,
        StorageNavComponent,
        GlobalNavComponent,
        CustomRightSidebarComponent
    ],
    exports: [
        LayoutComponent,

        HeaderNavComponent,
        DefaultComponent,
        ConnectComponent,
        StorageComponent,
        AsideNavComponent,
        AsideNavConnectComponent,
        AsideNavStorageComponent,
        FooterComponent,
        QuickSidebarComponent,
        ScrollTopComponent,
        TooltipsComponent,
        HrefPreventDefaultDirective,
        CustomRightSidebarComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
    ]
})
export class LayoutModule {
}
