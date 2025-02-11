import { Routes } from '@angular/router';
import { OrderListComponent } from './business/orders/feature/order-list/order-list.component';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './business/dashboard/dashboard.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path:'',
        component : HomeComponent
    },
    {
        path : 'auth',
        component: LoginComponent
    },
    {
        path : 'admin',
        component: LayoutComponent,
        //loadComponent : ()=>import("./shared/layout/layout.component"),
        children : [
            {
                path :'order',
                component : OrderListComponent 
            },
            {
                path : 'dashboard',
                component : DashboardComponent
            },
            {
                path : '',
                redirectTo : 'admin/order',   
                pathMatch : 'full'             
            }
        ]
    },
    {
        path : '**',
        redirectTo : ''
    }
];
