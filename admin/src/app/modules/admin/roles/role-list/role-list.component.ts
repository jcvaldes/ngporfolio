import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { HttpService } from '@core/services/http.service';
import { environment } from '@env';
import urljoin from 'url-join';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.scss']
})
export class RoleListComponent implements OnInit {
  displayedColumns: string[] = ['rolename'];
  dataSource = new MatTableDataSource();
  url: string;
  constructor(private httpService: HttpService) {
    this.url = urljoin(environment.apiUrl, 'role');
  }

  ngOnInit(): void {
    this.httpService.get(this.url).subscribe(roles => {
      this.dataSource = roles.rows;
    });
  }
}
