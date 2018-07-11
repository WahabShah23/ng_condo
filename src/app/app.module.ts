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

@NgModule({
    declarations: [
        ThemeComponent,
        AppComponent,
        WizardComponent
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
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyB95P4UOlcThWmtfkx7g4rGmzmKtomZoAc',
            libraries: ['places']
        })
    ],
    providers: [ScriptLoaderService, DemoService, AmenitiesService],
    bootstrap: [AppComponent]
})
export class AppModule { }
