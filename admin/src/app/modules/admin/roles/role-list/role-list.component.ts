import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { HttpService } from '@core/services/http.service';
import { environment } from '@env';
import urljoin from 'url-join';
import { RoleDetailComponent } from '../role-detail/role-detail.component';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.scss']
})
export class RoleListComponent implements OnInit {
  displayedColumns: string[] = ['rolename'];
  dataSource = new MatTableDataSource();
  url: string;
  constructor(
    private dialog: MatDialog,
    private httpService: HttpService
  ) {
    this.url = urljoin(environment.apiUrl, 'role');
  }

  ngOnInit(): void {
    this.httpService.get(this.url).subscribe(roles => {
      this.dataSource = roles.rows;
    });
  }
  onCreate() {
    const dialogRef = this.dialog.open(
      RoleDetailComponent,
      this.dialogConfig()
    );
    dialogRef.afterClosed().subscribe((result) => {
      debugger
    });
  }
  dialogConfig(data?) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '700px';
    dialogConfig.data = data || null;
    return dialogConfig;
  }

}
