import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigningUpComponent } from './signing-up/signing-up.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { MapComponent } from './map/map.component';
import { GoogleMapComponent } from './google-map/google-map.component';
import {HttpClientModule} from '@angular/common/http';
import {AgmCoreModule} from '@agm/core';
import { LocationInfoComponent } from './location-info/location-info.component';

@NgModule({
  declarations: [
    AppComponent,
    SigningUpComponent,
    NavComponent,
    HomeComponent,
    MapComponent,
    GoogleMapComponent,
    LocationInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAK-QWnL7z09pN_ivrhZXc6h3JeWQ3hIPc'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
