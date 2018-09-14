import { AsideNavAssetsComponent } from './aside-nav-assets/aside-nav-assets.component';
import { AsideNavSpecializedComponent } from './aside-nav-specialized/aside-nav-specialized.component';
import { AsideNavApartmentComponent } from './aside-nav-apartment/aside-nav-apartment.component';
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
import { AsideNavSettingsComponent } from './aside-nav-settings/aside-nav-settings.component';
import { SettingsComponent } from "../pages/custom_components/settings/settings/settings.component";
import { AsideNavBuildingComponent } from './aside-nav-building/aside-nav-building.component';
import { AsideNavOwndersRolesSettingsComponent } from './aside-nav-owners-roles-settings/aside-nav-owners-roles-settings.component';
import { AsideNavAssetsManagementComponent } from "./aside-nav-assets-management/aside-nav-assets-managment.component";

@NgModule({
    declarations: [
        LayoutComponent,

        HeaderNavComponent,
        DefaultComponent,
        ConnectComponent,
        StorageComponent,
        SettingsComponent,
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
        CustomRightSidebarComponent,
        AsideNavSettingsComponent,
        AsideNavBuildingComponent,
        AsideNavApartmentComponent,
        AsideNavSpecializedComponent,
        AsideNavOwndersRolesSettingsComponent,
        AsideNavAssetsManagementComponent,
        AsideNavAssetsComponent
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
        AsideNavSettingsComponent,
        FooterComponent,
        QuickSidebarComponent,
        ScrollTopComponent,
        TooltipsComponent,
        HrefPreventDefaultDirective,
        CustomRightSidebarComponent,
        AsideNavBuildingComponent,
        AsideNavApartmentComponent,
        AsideNavSpecializedComponent,
        AsideNavOwndersRolesSettingsComponent,
        AsideNavAssetsManagementComponent,
        AsideNavAssetsComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
    ]
})
export class LayoutModule {
}
