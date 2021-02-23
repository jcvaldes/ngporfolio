import { Injectable } from '@angular/core';
import { Product } from '@app/shared/models/product.model';
import { Subject } from 'rxjs';
import { HttpService } from '@core/services/http.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService extends HttpService {
  constructor(public http: HttpClient) {
    super(http);
  }
}
