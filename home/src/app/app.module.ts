import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { HeroComponent } from './shared/components/hero/hero.component';
import { FooterComponent } from './core/footer/footer.component';

import { HttpClientModule } from '@angular/common/http';
import { SkillCardComponent } from './shared/skill-card/skill-card.component';
import { HomeComponent } from './pages/home/home.component';
import { FeaturedProjectsComponent } from './shared/components/featured-projects/featured-projects.component';
import { TestimonialsComponent } from './shared/components/testimonials/testimonials.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    FooterComponent,
    SkillCardComponent,
    HomeComponent,
    FeaturedProjectsComponent,
    TestimonialsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
