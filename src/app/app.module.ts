import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HousingLocationComponent } from './housing-location/housing-location.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { DetailsComponent } from './details/details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HousingLocationComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
