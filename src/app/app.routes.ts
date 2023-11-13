import { InfoComponent } from './info/info.component';
import {SignupComponent} from './signup/signup.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';


export const routes: Routes = [
    { path : 'info', component: InfoComponent }, 
    { path : 'signup', component: SignupComponent }
];