import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from '../core/navbar/navbar.component';
import { HeroComponent } from '../shared/components/hero/hero.component';
import { FeatureComponent } from '../shared/components/feature/feature.component';
import { FeaturedEmployerComponent } from '../shared/components/featured-employer/featured-employer.component';
import { JobLocationComponent } from '../shared/components/job-location/job-location.component';
import { FunfactComponent } from '../shared/components/funfact/funfact.component';
import { CtaComponent } from '../shared/components/cta/cta.component';
import { SeassonJobsComponent } from '../shared/components/seasson-jobs/seasson-jobs.component';
import { TestimonialsComponent } from '../shared/components/testimonials/testimonials.component';
import { NewsLastestComponent } from '../shared/components/news-lastest/news-lastest.component';
import { BrandComponent } from '../shared/components/brand/brand.component';
import { JobsComponent } from './@public/jobs/jobs.component';

@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
    HeroComponent,
    FeatureComponent,
    FeaturedEmployerComponent,
    JobLocationComponent,
    FunfactComponent,
    CtaComponent,
    SeassonJobsComponent,
    TestimonialsComponent,
    NewsLastestComponent,
    BrandComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
