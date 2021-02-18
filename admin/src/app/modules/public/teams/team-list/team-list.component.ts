import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { SwalService } from '@core/services/swal.service';
import { TeamsService } from '../teams.service';
import { environment } from '@env';
import urljoin from 'url-join';
import { TeamDetailComponent } from '../team-detail/team-detail.component';
import { Team } from '../../../../shared/models/team.model';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss']
})
export class TeamListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'firstname', 'lastname', 'title', 'description', 'photo', 'actions'];
  dataSource = new MatTableDataSource();
  url: string;

  constructor(
    private dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router,
    private swalService: SwalService,
    private teamsService: TeamsService,
  ) {
    this.route.data.subscribe((data: { teams  }) => {

      this.dataSource.data = data.teams.rows;
    });
  }

  ngOnInit(): void {
  }

  onEdit(team) {
    this.teamsService.sendTeam(team);
  }

  onDelete(id) {
    this.swalService.confirm('Atención', 'Estás por eliminar un equipo', 'warning', true).then((result) => {
      if (result.value) {
        const url = urljoin(this.url, id.toString());
        this.teamsService.delete(url).subscribe((resp: any) => {
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
    this.router.navigate(['/teams']);
  }
}
