import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from '../core/not-found/not-found.component';
import { PricingComponent } from './@public/pricing/pricing.component';
import { ContactComponent } from './@public/contact/contact.component';
import { BlogComponent } from './@public/blog/blog.component';
import { JobsModule } from './@public/jobs/jobs.module';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: { titulo: 'Home' }
  },
  {
    path: 'jobs',
    loadChildren: () => import('./@public/jobs/jobs.module').then(mod => mod.JobsModule),
  },
  {
    path: 'candidates',
    loadChildren: () => import('./@public/candidates/candidates.module').then(mod => mod.CandidatesModule),
  },
  {
    path: 'employers',
    loadChildren: () => import('./@public/employers/employers.module').then(mod => mod.EmployersModule),
  },
  {
    path: 'blog',
    loadChildren: () => import('./@public/blog/blog.module').then(mod => mod.BlogModule),
  },
  {
    path: 'pricing',
    loadChildren: () => import('./@public/pricing/pricing.module').then(mod => mod.PricingModule),
  },
  {
    path: 'contact',
    loadChildren: () => import('./@public/contact/contact.module').then(mod => mod.ContactModule),
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
