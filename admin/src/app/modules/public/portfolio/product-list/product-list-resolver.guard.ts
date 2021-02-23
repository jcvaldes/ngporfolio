import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Resolve, Router } from '@angular/router';
import { Observable, EMPTY } from 'rxjs';
import { HttpService } from '@core/services/http.service';
import { Product } from '@app/shared/models/product.model';
import urljoin from 'url-join';
import { environment } from '@env';
@Injectable({
  providedIn: 'root'
})
export class ProductListResolverGuard implements Resolve<Product[]>  {
  private products: Product[];
  constructor(private httpService: HttpService, private router: Router) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Product[] | Observable<Product[]> | Promise<Product[]> {
    const url = urljoin(environment.apiUrl, 'project');
    return this.httpService.get(url);
  }
  // tslint:disable-next-line: max-line-length

}
