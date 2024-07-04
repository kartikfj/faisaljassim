import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProductsComponent } from './products/products.component';
import { NewsAndEventsComponent } from './news-and-events/news-and-events.component';
import { BrochuresComponent } from './brochures/brochures.component';
import { TrainingAndEducationComponent } from './training-and-education/training-and-education.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AccreditationsComponent } from './accreditations/accreditations.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: '', component: AppComponent },

  { path: 'home', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'news-and-events', component: NewsAndEventsComponent },
  { path: 'brochures', component: BrochuresComponent },
  { path: 'training-and-education', component: TrainingAndEducationComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'accreditations', component: AccreditationsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
