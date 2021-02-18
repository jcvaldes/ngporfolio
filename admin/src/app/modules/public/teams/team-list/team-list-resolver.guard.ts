import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Resolve, Router } from '@angular/router';
import { Observable, EMPTY } from 'rxjs';
import { HttpService } from '@core/services/http.service';
import { Team } from '@shared/models/team.model';
import urljoin from 'url-join';
import { environment } from '@env';
import { MatTableDataSource } from '@angular/material/table';
@Injectable({
  providedIn: 'root'
})
export class TeamListResolverGuard implements Resolve<Team[]>  {
  private categories: Team[];
  constructor(private httpService: HttpService, private router: Router) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Team[] | Observable<Team[]> | Promise<Team[]> {
    const url = urljoin(environment.apiUrl, 'team');
    return this.httpService.get(url);
  }
  // tslint:disable-next-line: max-line-length

}
