import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortfolioComponent } from './portfolio.component';
import { ProductListResolverGuard } from './product-list/product-list-resolver.guard';

const routes: Routes = [
  {
    path: '',
    component: PortfolioComponent,
    // canActivate: [VerifyTokenGuard],
    data: { titulo: 'Gestión de Portfolio' },
    resolve: { teams: ProductListResolverGuard },
    runGuardsAndResolvers: 'always'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioRoutingModule { }
