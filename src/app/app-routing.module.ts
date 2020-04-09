import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ChooseGameComponent } from './home/choose-game/choose-game.component';
import { SpyPanelComponent } from './home/spy-panel/spy-panel.component';
import { ResistancePanelComponent } from './home/resistance-panel/resistance-panel.component';

const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    {
        path: 'game', component: HomeComponent, children: [
            { path: '', component: ChooseGameComponent },
            { path: ':id/spy-panel', component: SpyPanelComponent },
            { path: ':id/resistance-panel', component: ResistancePanelComponent }
        ]
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {
}
