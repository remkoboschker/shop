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
} from '@angular/material';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { KeepHomepageComponent } from './keep-homepage/keep-homepage.component';
import { OrdersComponent } from './orders/orders.component';
import { AuthService } from './auth.service';
import { routes } from './app.routes';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomepageComponent,
    KeepHomepageComponent,
    OrdersComponent
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
    FlexLayoutModule,
    routes
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
