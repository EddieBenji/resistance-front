import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { metaReducers, reducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './reducers/app.effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { DefaultDataServiceConfig, EntityDataModule } from '@ngrx/data';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';

// Customs:
import { AngularMaterialModule } from './shared/modules/angular-material.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { entityConfig } from './shared/entities/entity-metadata';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ChooseGameComponent } from './home/choose-game/choose-game.component';
import { SpyPanelComponent } from './home/spy-panel/spy-panel.component';
import { ResistancePanelComponent } from './home/resistance-panel/resistance-panel.component';

const defaultDataServiceConfig: DefaultDataServiceConfig = {
    root: 'https://oscar-domain.com:8000/api/v1',
    timeout: 3000, // request timeout
};

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        HomeComponent,
        LoginComponent,
        SignupComponent,
        ChooseGameComponent,
        SpyPanelComponent,
        ResistancePanelComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        AngularMaterialModule,
        StoreModule.forRoot(reducers, {
            metaReducers
        }),
        StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
        EffectsModule.forRoot([ AppEffects ]),
        StoreRouterConnectingModule.forRoot(),
        EntityDataModule.forRoot(entityConfig),
        ReactiveFormsModule,
        FormlyModule.forRoot(),
        FormlyMaterialModule
    ],
    providers: [ { provide: DefaultDataServiceConfig, useValue: defaultDataServiceConfig } ],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
