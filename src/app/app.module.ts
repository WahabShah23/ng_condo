import { RolesService } from './services/roles.service';

import { RoomsService } from './services/roomsServices.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ThemeComponent } from './theme/theme.component';
import { LayoutModule } from './theme/layouts/layout.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AgmCoreModule } from '@agm/core';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';  // replaces previous Http service


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScriptLoaderService } from "./_services/script-loader.service";
import { ThemeRoutingModule } from "./theme/theme-routing.module";
import { AuthModule } from "./auth/auth.module";
import { WizardComponent } from './components/wizard/wizard.component';

import { DemoService } from "./services/demo.service";
import { AmenitiesService } from "./services/amenities.service";
import { InventoriesService } from "./services/inventories.service";
import { RulesService } from "./services/rules.service";
import { SupportService } from "./services/support.service";  // Our Support Service
import { SpecializedFacilityService } from './services/building-settings/specialized-facility.service';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';





@NgModule({
    declarations: [
        ThemeComponent,
        AppComponent,
        WizardComponent,
        
        
    ],
    imports: [
        LayoutModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AppRoutingModule,
        ThemeRoutingModule,
        AuthModule,
        ReactiveFormsModule,
        FormsModule,
        AngularMultiSelectModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyB95P4UOlcThWmtfkx7g4rGmzmKtomZoAc',
            libraries: ['places']
        })
    ],
    providers: [
        ScriptLoaderService,
        DemoService,
        AmenitiesService,
        InventoriesService,
        RulesService,
        RoomsService,
        SupportService,
        SpecializedFacilityService, 
        RolesService
    ],

    bootstrap: [AppComponent]
})
export class AppModule { }
