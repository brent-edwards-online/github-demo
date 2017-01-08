import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FitnessComponent } from './fitness/fitness.component';
import { ItComponent } from './it/it.component';

export const router: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'fitness', component: FitnessComponent },
    { path: 'it', component: ItComponent },
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);

