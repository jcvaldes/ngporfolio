import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './core/footer/footer.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { HeroComponent } from './shared/components/hero/hero.component';
import { FeatureComponent } from './shared/components/feature/feature.component';
import { FeaturedEmployerComponent } from './shared/components/featured-employer/featured-employer.component';
import { JobLocationComponent } from './shared/components/job-location/job-location.component';
import { FunfactComponent } from './shared/components/funfact/funfact.component';
import { CtaComponent } from './shared/components/cta/cta.component';
import { SeassonJobsComponent } from './shared/components/seasson-jobs/seasson-jobs.component';
import { TestimonialsComponent } from './shared/components/testimonials/testimonials.component';
import { NewsLastestComponent } from './shared/components/news-lastest/news-lastest.component';
import { BrandComponent } from './shared/components/brand/brand.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
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
    FooterComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
