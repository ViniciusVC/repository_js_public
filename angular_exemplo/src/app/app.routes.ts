import { Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { AngularComponent } from './views/angular/angular.component';
import { ComandosComponent } from './views/comandos/comandos.component';
import { EuComponent } from './views/eu/eu.component';
import { BackupangularComponent } from './views/backupangular/backupangular.component';


export const routes: Routes = [
    {path:'', component: HomeComponent},
    {path:'angular', component: AngularComponent},
    {path:'comandos', component: ComandosComponent},
    {path:'backup', component: BackupangularComponent},
    {path:'eu', component: EuComponent}
];
