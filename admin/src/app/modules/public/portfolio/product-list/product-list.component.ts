import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { SwalService } from '@core/services/swal.service';
import { PortfolioService } from '../portfolio.service';
import { environment } from '@env';
import urljoin from 'url-join';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { Product } from '../../../../shared/models/product.model';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'url', 'title', 'description', 'videoUrl', 'description', 'content', 'actions'];
  dataSource = new MatTableDataSource();
  url: string;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private swalService: SwalService,
    private portfolioService: PortfolioService,
  ) {
    this.route.data.subscribe((data: { products  }) => {
      this.dataSource.data = data.products.rows;
    });
  }
  ngOnInit(): void {
  }
  onEdit(product) {
  }
  onDelete(id) {
    this.swalService.confirm('Atención', 'Estás por eliminar un equipo', 'warning', true).then((result) => {
      if (result.value) {
        const url = urljoin(environment.apiUrl, `product/${id.toString()}`);
        this.portfolioService.delete(url).subscribe((resp: any) => {
          this.onLoadPage();
          this.swalService.success('Atención', 'El equipo ha sido eliminado');
        }, err => {
          this.swalService.error('Atención', err);
        });
      }
    });
  }

  dialogConfig(data?) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '700px';
    dialogConfig.data = data || null;
    return dialogConfig;
  }

  onLoadPage() {
    this.router.navigated = false;
    this.router.navigate(['/products']);
  }
}
