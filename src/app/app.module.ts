import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SiteFooterModule } from './site-footer/site-footer.module';
import { SiteHeaderModule } from './site-header/site-header.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SiteHeaderModule,
    SiteFooterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
