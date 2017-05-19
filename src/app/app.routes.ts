import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductLinesComponent } from './product-lines/product-lines.component';
import { EditProductLineComponent } from './edit-product-line/edit-product-line.component'
import { AuthGuardService } from './auth-guard.service';

export const router: Routes = [
    { path: '', redirectTo: 'product-lines', pathMatch: 'full' },
    { path: 'product-lines', component: ProductLinesComponent, children: [
        { path: 'add-product-line', component: EditProductLineComponent, canActivate: [AuthGuardService] }
    ] },
    { path: 'login', component: LoginComponent },
    { path: 'orders', component: OrdersComponent, canActivate: [AuthGuardService] },
    

]

export const routes: ModuleWithProviders = RouterModule.forRoot(router);