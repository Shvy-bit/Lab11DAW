import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Index } from './index';

export const routes: Routes = [
    {path: '', redirectTo: 'index', pathMatch: 'full'},
    {path: 'login', component: Login},
    {path: 'index', component: Index}
];
