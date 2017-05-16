import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { OrdersComponent } from './orders/orders.component';
import { HomepageComponent } from './homepage/homepage.component';
import { KeepHomepageComponent } from './keep-homepage/keep-homepage.component';
import { AuthService } from './auth.service';

export const router: Routes = [
    { path: '', component: HomepageComponent },
    { path: 'login', component: LoginComponent },
    { path: 'keep', component: KeepHomepageComponent, canActivate: [AuthService] },
    { path: 'orders', component: OrdersComponent, canActivate: [AuthService] }

]

export const routes: ModuleWithProviders = RouterModule.forRoot(router);