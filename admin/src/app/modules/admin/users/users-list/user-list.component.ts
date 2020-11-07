import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { HttpService } from '@core/services/http.service';
import { environment } from '@env';
import urljoin from 'url-join';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'firstname'];
  dataSource = new MatTableDataSource();
  url: string;
  constructor(private httpService: HttpService) {
    this.url = urljoin(environment.apiUrl, 'user');
  }

  ngOnInit(): void {
    this.httpService.get(this.url).subscribe(users => {
      this.dataSource = users.rows;
    });
  }
}
