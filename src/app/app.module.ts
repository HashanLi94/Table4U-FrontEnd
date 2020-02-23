import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SiteFooterModule } from './site-footer/site-footer.module';
import { SiteHeaderModule } from './site-header/site-header.module';
import {HttpClientModule} from '@angular/common/http';
import {ReservationManagementService} from "./reservation-management/service/reservation-management.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ReservationManagementComponent} from "./reservation-management/reservation-management.component";
import {ReservationManagementModule} from "./reservation-management/reservation-management.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    ReservationManagementModule,
    HttpClientModule,
    AppRoutingModule,
    SiteHeaderModule,
    SiteFooterModule,

  ],
  providers: [ReservationManagementService],
  bootstrap: [AppComponent]
})
export class AppModule { }
