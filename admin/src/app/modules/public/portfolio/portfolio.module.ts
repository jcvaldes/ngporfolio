import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material.module';
import { SharedModule } from '../../../shared/shared.module';
import { PortfolioRoutingModule } from './portfolio-routing.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PortfolioComponent } from './portfolio.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@NgModule({
  declarations: [PortfolioComponent, ProductListComponent, ProductDetailComponent],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class PortfolioModule { }
