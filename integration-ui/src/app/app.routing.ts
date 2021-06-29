import { Routes, Router, RouterModule } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';

const APP_ROUTES: Routes = [ 
    { path: 'login', component: LoginComponent},
    { path: 'home', component: HomeComponent},
    { path: 'user', component: UserComponent},
    { path: '', component: HomeComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);