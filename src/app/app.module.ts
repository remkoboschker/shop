import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AppComponent } from './app.component';
import { environment } from "environments/environment";
import { 
  MdToolbarModule,
  MdButtonModule,
  MdIconModule,
  MdMenuModule,
  MdInputModule,
  MdDialogModule,
  MdCardModule
} from '@angular/material';
import { LoginComponent } from './login/login.component';
import { OrdersComponent } from './orders/orders.component';
import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-guard.service';
import { routes } from './app.routes';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProductLinesComponent } from './product-lines/product-lines.component';
import { ProductLineComponent } from './product-line/product-line.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { OrderComponent } from './order/order.component';
import { EditProductLineComponent } from './edit-product-line/edit-product-line.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    OrdersComponent,
    ProductLinesComponent,
    ProductLineComponent,
    ProductsComponent,
    ProductComponent,
    ProductItemComponent,
    OrderComponent,
    EditProductLineComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    MdToolbarModule,
    MdButtonModule,
    MdIconModule,
    MdMenuModule,
    MdDialogModule,
    MdInputModule,
    FlexLayoutModule,
    MdCardModule,
    routes
  ],
  providers: [AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
