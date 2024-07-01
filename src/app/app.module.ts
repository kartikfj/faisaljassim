import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProductsComponent } from './products/products.component';
import { NewsAndEventsComponent } from './news-and-events/news-and-events.component';
import { BrochuresComponent } from './brochures/brochures.component';
import { TrainingAndEducationComponent } from './training-and-education/training-and-education.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AccreditationsComponent } from './accreditations/accreditations.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    ProductsComponent,
    NewsAndEventsComponent,
    BrochuresComponent,
    TrainingAndEducationComponent,
    ContactUsComponent,
    AccreditationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
