import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from './portfolio.component';
import { FooterComponent } from '../../core/footer/footer.component';
import { HeroComponent } from '../../shared/components/hero/hero.component';
import { NavbarComponent } from '../../core/navbar/navbar.component';
import { FeaturedProjectsComponent } from '../../shared/components/featured-projects/featured-projects.component';
import { TestimonialsComponent } from '../../shared/components/testimonials/testimonials.component';
import { LetsTalkComponent } from '../../shared/components/lets-talk/lets-talk.component';
import { SkillCardComponent } from '../../shared/skill-card/skill-card.component';
import { UnavalilableComponent } from '../unavalilable/unavalilable.component';



@NgModule({
  declarations: [
    PortfolioComponent,
    UnavalilableComponent,
    NavbarComponent,
    HeroComponent,
    FooterComponent,
    FeaturedProjectsComponent,
    TestimonialsComponent,
    LetsTalkComponent,
    SkillCardComponent
  ],
  imports: [
    CommonModule,

  ]
})
export class PortfolioModule { }
